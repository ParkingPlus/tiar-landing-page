import { PortableTextBlock } from '@portabletext/types';

export interface Post {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  imageURL: string;
  authorName?: string;
  categories: Category[];
  _createdAt: string;
  body: PortableTextBlock[];
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
  slug?: {
    current: string;
  };
} 