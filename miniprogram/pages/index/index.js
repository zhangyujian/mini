const app = getApp();

Page({
  data: {
    hero: {
      title: '原产地严选新鲜好物',
      subtitle: '覆盖有机生鲜、轻食零嘴、身心呵护等多个生活场景',
      background:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    },
    perks: [
      {
        title: '新客立减 20 元',
        desc: '注册后即可领取专属优惠券包，部分爆款可叠加使用。'
      },
      {
        title: '会员满 199 包邮',
        desc: '加入会员即可享受全国大部分地区满 199 元包邮特权。'
      },
      {
        title: '48 小时极速发货',
        desc: '自营仓储与冷链物流合作，保证下单后 48 小时内发出。'
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
