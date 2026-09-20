export const homeData: Record<string, {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  luas: string;
  kamar: string;
  mandi: string;
  harga: string;
  gallery: { src: string; alt: string }[];
}> = {
  horizon: {
    title: 'The Horizon',
    subtitle: 'Modern Series • 250 sqm',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Horizon modern house exterior at dusk',
    luas: '250 m²', kamar: '3', mandi: '2', harga: '$150,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Living room with modern furniture' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Modern kitchen with island' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Master bedroom' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Spa-like bathroom' },
      { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Exterior with terrace' },
      { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Dining area' }
    ]
  },
  zen: {
    title: 'The Zen',
    subtitle: 'Minimalist Series • 180 sqm',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Zen minimalist house with clean lines',
    luas: '180 m²', kamar: '2', mandi: '2', harga: '$95,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Minimalist living room' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Minimalist kitchen' },
      { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Serene bedroom' },
      { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Clean bathroom' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Zen garden view' },
      { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Living area with garden' }
    ]
  },
  oasis: {
    title: 'The Oasis',
    subtitle: 'Villa Series • 400 sqm',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Oasis luxury villa with pool',
    luas: '400 m²', kamar: '4', mandi: '4', harga: '$350,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Villa living room' },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Luxury kitchen' },
      { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Master suite' },
      { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Pool view' },
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Terrace lounge' },
      { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Tropical garden' }
    ]
  },
  breeze: {
    title: 'The Breeze',
    subtitle: 'Tropical Series • 220 sqm',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Breeze tropical house with wooden accents',
    luas: '220 m²', kamar: '3', mandi: '2', harga: '$135,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Tropical living room' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Open kitchen' },
      { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Bedroom with view' },
      { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Outdoor dining' },
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Relaxation area' },
      { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Garden walkway' }
    ]
  },
  cube: {
    title: 'The Cube',
    subtitle: 'Modern Series • 320 sqm',
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Cube modern house with geometric shapes',
    luas: '320 m²', kamar: '4', mandi: '3', harga: '$220,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Geometric living room' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Contemporary kitchen' },
      { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Modern bedroom' },
      { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Designer bathroom' },
      { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Living with exterior view' },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Facade detail' }
    ]
  },
  loft: {
    title: 'The Loft',
    subtitle: 'Minimalist Series • 150 sqm',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'The Loft minimalist house with concrete and wood',
    luas: '150 m²', kamar: '2', mandi: '1', harga: '$80,000',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Minimal loft living' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Compact kitchen' },
      { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Cozy bedroom' },
      { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Sleek bathroom' },
      { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Loft window' },
      { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Dining nook' }
    ]
  }
};

export const caseData: Record<string, {
  title: string;
  description: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  durasi: string;
  luas: string;
  budget: string;
  quote: string;
  quoteAuthor: string;
}> = {
  alpine: {
    title: 'The Alpine Retreat',
    description: 'A harmonious blend of modern architecture and mountainous landscape.',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    beforeAlt: 'Before renovation: old house on the alpine site',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterAlt: 'After renovation: modern Alpine Retreat house',
    durasi: '8 Bulan', luas: '450 m²', budget: '$350k',
    quote: '"RANTY tidak hanya membangun rumah, mereka menciptakan ruang di mana kenangan keluarga kami akan tumbuh. Perhatian terhadap detail sungguh luar biasa."',
    quoteAuthor: '— Mr. & Mrs. Smith'
  },
  coastal: {
    title: 'Coastal Villa',
    description: 'A cliffside villa designed to embrace the ocean breeze and natural light.',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    beforeAlt: 'Before: coastal plot before construction',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterAlt: 'After: Coastal Villa with infinity pool',
    durasi: '12 Bulan', luas: '600 m²', budget: '$520k',
    quote: '"Setiap pagi kami bangun dengan pemandangan laut yang luar biasa. RANTY memahami visi kami dengan sempurna."',
    quoteAuthor: '— The Wijaya Family'
  },
  techhub: {
    title: 'Tech Hub Office',
    description: 'A collaborative workspace designed for a fast-growing technology company.',
    beforeImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    beforeAlt: 'Before: empty office space',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterAlt: 'After: modern Tech Hub Office with open workspace',
    durasi: '6 Bulan', luas: '850 m²', budget: '$480k',
    quote: '"Ruang kerja yang kami tempati sekarang meningkatkan produktivitas tim secara signifikan. Desainnya luar biasa."',
    quoteAuthor: '— Sarah Lim, CEO'
  },
  loftcase: {
    title: 'Minimalist Loft',
    description: 'A compact urban loft transformed into a warm, functional sanctuary.',
    beforeImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    beforeAlt: 'Before: old industrial loft space',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    afterAlt: 'After: minimalist loft with modern furniture',
    durasi: '4 Bulan', luas: '110 m²', budget: '$85k',
    quote: '"RANTY mengubah ruang sempit ini menjadi rumah yang terasa lapang dan hangat. Kami sangat puas."',
    quoteAuthor: '— James Tan'
  }
};
