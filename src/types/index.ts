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
  body: {
    _type: string;
    children: Array<{
      _type: string;
      text: string;
      marks?: string[];
    }>;
    markDefs?: Array<{
      _type: string;
      href: string;
    }>;
  }[];
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
  slug?: {
    current: string;
  };
}

export interface MenuItem {
  href: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface MenuItems {
  aboutUs: MenuItem[];
  useCase: MenuItem[];
  offerings: MenuItem[];
  resources: MenuItem[];
} 