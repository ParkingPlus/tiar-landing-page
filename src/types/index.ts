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
  imageURL: any;
  authorName?: string;
  categories: Category[];
  _createdAt: string;
  body: any; // Sanity's Portable Text
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
  slug?: {
    current: string;
  };
} 