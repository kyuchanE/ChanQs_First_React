export type ProductFeature = {
  title: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  heroImage: string;
  price: string;
  highlights: string[];
  features: ProductFeature[];
  seoTitle: string;
  seoDescription: string;
};
