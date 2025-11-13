const categories = [
  {
    id: 'fresh',
    name: '有机生鲜',
    banner:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80',
    slogan: '每日冷链直达，健康生活触手可及',
    description: '严选原产地上乘食材，坚持无激素、零农残，只为你的每日餐桌。'
  },
  {
    id: 'snacks',
    name: '轻食零嘴',
    banner:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    slogan: '低糖高纤，满足味蕾的同时更关心你的身材',
    description: '精选全球口碑小食，健康与美味兼得，让休闲时光无负担。'
  },
  {
    id: 'beauty',
    name: '身心呵护',
    banner:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    slogan: '天然香氛伴你放松一刻',
    description: '植物精粹护肤、芳疗香氛，与你一起打造温柔生活感。'
  }
];

const products = [
  {
    id: 'fresh-01',
    name: '海南甜心小台农芒果',
    cover:
      'https://images.unsplash.com/photo-1615485290382-455d4d0cd36d?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1592928302989-724003b05317?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 59.9,
    unit: '5斤装',
    stock: 24,
    tags: ['零农残检测', '当季鲜采'],
    categoryId: 'fresh',
    description:
      '精选海南当季熟成芒果，甜度高、纤维少。全程冷链配送，保证到手鲜嫩多汁。'
  },
  {
    id: 'fresh-02',
    name: '智利空运车厘子',
    cover:
      'https://images.unsplash.com/photo-1464962634408-5970d4d148e1?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1472476443506-ead00489e341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570197788417-0e8239cfdc31?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 138,
    unit: 'JJ 2斤装',
    stock: 12,
    tags: ['原装空运', '脆甜爆汁'],
    categoryId: 'fresh',
    description:
      '甄选智利 JJ 级别车厘子，原装空运，果径大、甜度高，适合分享的聚会甜品。'
  },
  {
    id: 'snacks-01',
    name: '伊比利亚火腿芝士脆片',
    cover:
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 32.5,
    unit: '90g / 袋',
    stock: 58,
    tags: ['高蛋白', '无麸质'],
    categoryId: 'snacks',
    description:
      '进口芝士与火腿烘烤制成的轻盈脆片，高蛋白低碳水，随时补充能量。'
  },
  {
    id: 'snacks-02',
    name: '新西兰酸奶燕麦杯',
    cover:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 18.9,
    unit: '200g / 杯',
    stock: 66,
    tags: ['高纤维', '益生菌'],
    categoryId: 'snacks',
    description:
      '选用草饲奶源发酵，加入多种坚果与干果，口感层次丰富。冷藏即食，适合早餐或下午茶。'
  },
  {
    id: 'beauty-01',
    name: '薰衣草舒缓香薰蜡烛',
    cover:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 129,
    unit: '200g / 约45小时',
    stock: 20,
    tags: ['大豆蜡', '纯植物精油'],
    categoryId: 'beauty',
    description:
      '源自普罗旺斯的薰衣草精油，搭配大豆蜡低温熔点，燃烧时释放柔和香气，舒缓压力。'
  },
  {
    id: 'beauty-02',
    name: '有机洋甘菊沐浴露',
    cover:
      'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80',
    slider: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80'
    ],
    price: 86,
    unit: '400ml',
    stock: 48,
    tags: ['EWG 绿色', '敏感肌友好'],
    categoryId: 'beauty',
    description:
      '使用有机洋甘菊与芦荟萃取，温和清洁的同时为肌肤补水舒缓，沐浴后留有淡淡草本香。'
  }
];

module.exports = {
  categories,
  products
};
