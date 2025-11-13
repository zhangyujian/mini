const app = getApp();

Page({
  data: {
    hero: {
      title: 'Global Merch for Every Supporter',
      subtitle: 'Ship bold statements to 190+ countries with localized fulfillment and reliable customs handling.',
      background:
        'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=80'
    },
    perks: [
      {
        title: 'Worldwide Express Shipping',
        desc: 'Trusted carriers deliver within 5-7 business days. Duties pre-calculated for stress-free checkout.'
      },
      {
        title: 'Multi-currency Pricing',
        desc: 'Pay securely in USD, EUR, GBP, CAD, AUD, and more with transparent exchange rates.'
      },
      {
        title: 'Sustainable Production',
        desc: 'Ethically sourced materials and carbon-offset logistics for every campaign drop.'
      }
    ],
    categories: [],
    featuredProducts: []
  },

  onLoad() {
    const { categories, products } = app.globalData;
    this.setData({
      categories,
      featuredProducts: products.slice(0, 4)
    });
  },

  goToCategory(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/catalog/catalog?categoryId=${id}`
    });
  },

  goToProduct(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product/product?id=${id}`
    });
  },

  goToCatalog() {
    wx.switchTab({
      url: '/pages/catalog/catalog'
    });
  }
});
