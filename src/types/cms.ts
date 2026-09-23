export interface Home {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  hero_image: string;
  hero_alt: string;
  luas: string;
  kamar: string;
  mandi: string;
  harga: string;
  gallery: { src: string; alt: string }[];
  category: string;
  order_index: number;
  created_at: string;
}

export interface Case {
  id: string;
  slug: string;
  title: string;
  description: string;
  before_image: string;
  before_alt: string;
  after_image: string;
  after_alt: string;
  durasi: string;
  luas: string;
  budget: string;
  quote: string;
  quote_author: string;
  category: string;
  region: string;
  order_index: number;
  created_at: string;
}
