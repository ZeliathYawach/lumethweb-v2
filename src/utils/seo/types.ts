export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  url?: string;
  appLinks?: {
    ios?: string;
    android?: string;
    web?: string;
  };
}

export interface SocialMeta {
  title: string;
  description: string;
  image: string;
  url: string;
}