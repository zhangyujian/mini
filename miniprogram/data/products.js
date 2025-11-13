const categories = [
  {
    id: 'apparel',
    name: 'Statement Apparel',
    banner:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3d3b?auto=format&fit=crop&w=800&q=80',
    slogan: 'Limited runs crafted for supporters around the globe',
    description:
      'Premium fabrics and bold graphics that celebrate what you stand for. Ethically produced with worldwide fulfillment.'
  },
  {
    id: 'accessories',
    name: 'Collectible Accessories',
    banner:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    slogan: 'Carry your message everywhere you go',
    description:
      'Pins, totes, and everyday gear designed for durability. Perfect for rallies, meetups, or gifting to fellow supporters.'
  },
  {
    id: 'home',
    name: 'Home & Living',
    banner:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    slogan: 'Create a space that reflects your voice',
    description:
      'From desk accents to morning essentials, refresh your home with pieces that spark conversation and pride.'
  }
];

const products = [
  {
    id: 'apparel-01',
    name: 'Liberty Crest Premium Hoodie',
    cover:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 68,
    unit: 'Sizes S-XXL · Brushed organic cotton',
    stock: 35,
    tags: ['Organic cotton', 'Limited edition'],
    categoryId: 'apparel',
    description:
      'A heavyweight hoodie featuring the Liberty Crest emblem in puff print. Soft on the inside, resilient on the outside, and ready for everyday wear in any climate.'
  },
  {
    id: 'apparel-02',
    name: 'Unity Flag Baseball Cap',
    cover:
      'https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542293787938-4d2226c42c35?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 32,
    unit: 'Adjustable strapback · Embroidered',
    stock: 58,
    tags: ['Worldwide favorite', 'Embroidered'],
    categoryId: 'apparel',
    description:
      'A structured six-panel cap with a curved brim and raised embroidery. Breathable twill keeps it cool, while the adjustable strap delivers a secure fit for all-day rallies.'
  },
  {
    id: 'accessories-01',
    name: 'World Tour Enamel Pin Set',
    cover:
      'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1518544889280-0fbb832863e4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 24,
    unit: 'Set of 3 · Hard enamel & brass',
    stock: 120,
    tags: ['Collector set', 'Gift ready'],
    categoryId: 'accessories',
    description:
      'Three pins celebrating unity across continents. Each pin uses polished brass, double-post backs, and UV coating to keep colors bright wherever your travels take you.'
  },
  {
    id: 'accessories-02',
    name: 'Global Voice Canvas Tote',
    cover:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 28,
    unit: '16 oz cotton canvas · Inner pocket',
    stock: 75,
    tags: ['Everyday carry', 'Sustainable'],
    categoryId: 'accessories',
    description:
      'A reinforced canvas tote with screen-printed artwork on both sides. Features an internal zip pocket and boxed corners to keep tech, literature, and essentials organized.'
  },
  {
    id: 'home-01',
    name: 'Morning Briefing Ceramic Mug',
    cover:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1462917882517-e150004895fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 19,
    unit: '350 ml · Dishwasher safe',
    stock: 90,
    tags: ['Dishwasher safe', 'Microwave safe'],
    categoryId: 'home',
    description:
      'Double-walled ceramic keeps drinks warm during early strategy sessions. The contrast handle and inside glaze add a modern look to desks, studios, or kitchen counters.'
  },
  {
    id: 'home-02',
    name: 'Campaign Trail Throw Blanket',
    cover:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 84,
    unit: '140 × 180 cm · Recycled fibers',
    stock: 42,
    tags: ['Recycled yarn', 'Travel ready'],
    categoryId: 'home',
    description:
      'A jacquard woven throw produced with recycled yarns. Lightweight enough to pack, generous enough to wrap around two supporters on a cool evening event.'
  }
];

module.exports = {
  categories,
  products
};
