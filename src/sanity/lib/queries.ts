import { groq } from "next-sanity";

export const POSTS_PER_PAGE = 6;

// Get paginated, filtered, and sorted posts, and total count
export const postsQuery = groq`{
  "posts": *[_type == "post" && ($category == "all" || $category in categories[]->slug.current) && (title match $searchQuery || description match $searchQuery)] | order($sortBy) [$start...$end] {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    description,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    categories[]->{
      _id,
      title,
      slug
    }
  },
  "total": count(*[_type == "post" && ($category == "all" || $category in categories[]->slug.current) && (title match $searchQuery || description match $searchQuery)])
}`;

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  slug,
}`;

// Get a single category by its slug
export const categoryQuery = groq`*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    description,
    body,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    categories[]->{
      _id,
      title,
      slug
    }
  }`;

// Get the 5 latest posts by category slug
export const latestPostsByCategoryQuery = groq`*[_type == "post" && $category in categories[]->slug.current] | order(_createdAt desc) [0...5] {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    description,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    categories[]->{
      _id,
      title,
      slug
    }
}`;

export const latestPostsQuery = groq`*[_type == "post"] | order(_createdAt desc) [0...5] {
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
    description,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    categories[]->{
      _id,
      title,
      slug
    }
}`;

// Get all post slugs for generating static paths
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
