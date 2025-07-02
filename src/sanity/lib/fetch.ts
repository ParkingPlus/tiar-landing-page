"use server";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { Category, Post } from "@/types";
import { categoriesQuery, postsQuery, categoryQuery, postQuery } from "./queries";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  let isDraftMode = false;
  try {
    isDraftMode = (await draftMode()).isEnabled;
  } catch {
    // Handle error when draftMode is called in a non-request context
  }

  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: !isDraftMode }) // Use CDN only when not in draft mode
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}

export async function getCategories(): Promise<Category[]> {
  return sanityFetch<Category[]>({
    query: categoriesQuery,
    tags: ["category", "post"],
  });
}

export async function getCategory(slug: string): Promise<Category> {
  return sanityFetch<Category>({
    query: categoryQuery,
    params: { slug },
    tags: [`category:${slug}`],
  });
}

export async function getPosts({
  page = 1,
  category = 'all',
  sortBy = 'newest',
  search = '',
  postsPerPage = 6
}: {
  page?: number;
  category?: string;
  sortBy?: string;
  search?: string;
  postsPerPage?: number;
}): Promise<{posts: Post[], total: number}> {
  const sortMap: { [key: string]: string } = {
    'newest': '_createdAt desc',
    'oldest': '_createdAt asc',
    'a-z': 'title asc',
    'z-a': 'title desc',
  };

  const queryParams = {
    start: (page - 1) * postsPerPage,
    end: page * postsPerPage,
    category,
    sortBy: sortMap[sortBy] || '_createdAt desc',
    searchQuery: search ? `*${search}*` : '*',
  };

  return sanityFetch<{posts: Post[], total: number}>({
    query: postsQuery,
    params: queryParams,
    tags: ['post', 'category'],
  });
}

export async function getPost(slug: string): Promise<Post> {
  return sanityFetch<Post>({
    query: postQuery,
    params: { slug },
    tags: [`post:${slug}`],
  });
}