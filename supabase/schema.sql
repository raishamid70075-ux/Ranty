-- RANTY CMS schema for Supabase
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New query)

-- Homes table
CREATE TABLE IF NOT EXISTS public.homes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  hero_alt TEXT NOT NULL,
  luas TEXT NOT NULL,
  kamar TEXT NOT NULL,
  mandi TEXT NOT NULL,
  harga TEXT NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  category TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Cases table
CREATE TABLE IF NOT EXISTS public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  before_image TEXT NOT NULL,
  before_alt TEXT NOT NULL,
  after_image TEXT NOT NULL,
  after_alt TEXT NOT NULL,
  durasi TEXT NOT NULL,
  luas TEXT NOT NULL,
  budget TEXT NOT NULL,
  quote TEXT NOT NULL,
  quote_author TEXT NOT NULL,
  category TEXT NOT NULL,
  region TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Row Level Security
ALTER TABLE public.homes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read on homes"
  ON public.homes
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read on cases"
  ON public.cases
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can manage content
CREATE POLICY "Allow authenticated insert on homes"
  ON public.homes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update on homes"
  ON public.homes
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on homes"
  ON public.homes
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated insert on cases"
  ON public.cases
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update on cases"
  ON public.cases
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on cases"
  ON public.cases
  FOR DELETE
  TO authenticated
  USING (true);

-- Seed data from the original siteData.ts
INSERT INTO public.homes (slug, title, subtitle, hero_image, hero_alt, luas, kamar, mandi, harga, gallery, category, order_index)
VALUES
('horizon', 'The Horizon', 'Modern Series • 250 sqm', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Horizon modern house exterior at dusk', '250 m²', '3', '2', '$150,000', '[{"src":"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Living room with modern furniture"},{"src":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Modern kitchen with island"},{"src":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Master bedroom"},{"src":"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Spa-like bathroom"},{"src":"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Exterior with terrace"},{"src":"https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Dining area"}]'::jsonb, 'modern', 0),
('zen', 'The Zen', 'Minimalist Series • 180 sqm', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Zen minimalist house with clean lines', '180 m²', '2', '2', '$95,000', '[{"src":"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Minimalist living room"},{"src":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Minimalist kitchen"},{"src":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Serene bedroom"},{"src":"https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Clean bathroom"},{"src":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Zen garden view"},{"src":"https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Living area with garden"}]'::jsonb, 'minimalist', 1),
('oasis', 'The Oasis', 'Villa Series • 400 sqm', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Oasis luxury villa with pool', '400 m²', '4', '4', '$350,000', '[{"src":"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Villa living room"},{"src":"https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Luxury kitchen"},{"src":"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Master suite"},{"src":"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Pool view"},{"src":"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Terrace lounge"},{"src":"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Tropical garden"}]'::jsonb, 'villa', 2),
('breeze', 'The Breeze', 'Tropical Series • 220 sqm', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Breeze tropical house with wooden accents', '220 m²', '3', '2', '$135,000', '[{"src":"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Tropical living room"},{"src":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Open kitchen"},{"src":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Bedroom with view"},{"src":"https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Outdoor dining"},{"src":"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Relaxation area"},{"src":"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Garden walkway"}]'::jsonb, 'tropical', 3),
('cube', 'The Cube', 'Modern Series • 320 sqm', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Cube modern house with geometric shapes', '320 m²', '4', '3', '$220,000', '[{"src":"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Geometric living room"},{"src":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Contemporary kitchen"},{"src":"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Modern bedroom"},{"src":"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Designer bathroom"},{"src":"https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Living with exterior view"},{"src":"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Facade detail"}]'::jsonb, 'modern', 4),
('loft', 'The Loft', 'Minimalist Series • 150 sqm', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'The Loft minimalist house with concrete and wood', '150 m²', '2', '1', '$80,000', '[{"src":"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Minimal loft living"},{"src":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Compact kitchen"},{"src":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Cozy bedroom"},{"src":"https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Sleek bathroom"},{"src":"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Loft window"},{"src":"https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80","alt":"Dining nook"}]'::jsonb, 'minimalist', 5)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.cases (slug, title, description, before_image, before_alt, after_image, after_alt, durasi, luas, budget, quote, quote_author, category, region, order_index)
VALUES
('alpine', 'The Alpine Retreat', 'A harmonious blend of modern architecture and mountainous landscape.', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Before renovation: old house on the alpine site', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'After renovation: modern Alpine Retreat house', '8 Bulan', '450 m²', '$350k', 'RANTY tidak hanya membangun rumah, mereka menciptakan ruang di mana kenangan keluarga kami akan tumbuh. Perhatian terhadap detail sungguh luar biasa.', '— Mr. & Mrs. Smith', 'residential', 'Residential • Switzerland', 0),
('coastal', 'Coastal Villa', 'A cliffside villa designed to embrace the ocean breeze and natural light.', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Before: coastal plot before construction', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'After: Coastal Villa with infinity pool', '12 Bulan', '600 m²', '$520k', 'Setiap pagi kami bangun dengan pemandangan laut yang luar biasa. RANTY memahami visi kami dengan sempurna.', '— The Wijaya Family', 'residential', 'Residential • Bali', 1),
('techhub', 'Tech Hub Office', 'A collaborative workspace designed for a fast-growing technology company.', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Before: empty office space', 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'After: modern Tech Hub Office with open workspace', '6 Bulan', '850 m²', '$480k', 'Ruang kerja yang kami tempati sekarang meningkatkan produktivitas tim secara signifikan. Desainnya luar biasa.', '— Sarah Lim, CEO', 'commercial', 'Commercial • Jakarta', 2),
('loftcase', 'Minimalist Loft', 'A compact urban loft transformed into a warm, functional sanctuary.', 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'Before: old industrial loft space', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'After: minimalist loft with modern furniture', '4 Bulan', '110 m²', '$85k', 'RANTY mengubah ruang sempit ini menjadi rumah yang terasa lapang dan hangat. Kami sangat puas.', '— James Tan', 'interior', 'Interior • Singapore', 3)
ON CONFLICT (slug) DO NOTHING;
