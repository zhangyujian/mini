const app = getApp();
const cart = require('../../utils/cart');

Page({
  data: {
    product: null,
    quantity: 1,
    recommendedProducts: [],
    sliderIndex: 0
  },

  onLoad(options) {
    const { products } = app.globalData;
    const product = products.find((item) => item.id === options.id);

    if (!product) {
      wx.showToast({
        title: 'Product unavailable',
        icon: 'none'
      });
      this.setData({ product: null });
      return;
    }

    const recommendedProducts = products
      .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
      .slice(0, 3);

    wx.setNavigationBarTitle({
      title: product.name
    });

    this.setData({
      product,
      recommendedProducts
    });
  },

  onSliderChange(event) {
    this.setData({ sliderIndex: event.detail.current });
  },

  increaseQuantity() {
    this.setData({ quantity: this.data.quantity + 1 });
  },

  decreaseQuantity() {
    if (this.data.quantity > 1) {
      this.setData({ quantity: this.data.quantity - 1 });
    }
  },

  addToCart() {
    const { product, quantity } = this.data;
    if (!product) {
      return;
    }

    cart.addToCart(product, quantity);
    wx.showToast({
      title: 'Added to cart',
      icon: 'success'
    });
  },

  buyNow() {
    this.addToCart();
    wx.switchTab({
      url: '/pages/cart/cart'
    });
  },

  previewImage(event) {
    const { index } = event.currentTarget.dataset;
    const urls = this.data.product.slider;
    wx.previewImage({
      urls,
      current: urls[index]
    });
  },

  goToProduct(event) {
    const { id } = event.currentTarget.dataset;
    wx.redirectTo({
      url: `/pages/product/product?id=${id}`
    });
  },

  onShareAppMessage() {
    const { product } = this.data;
    if (!product) {
      return {};
    }

    return {
      title: `${product.name} | ${product.unit}`,
      path: `/pages/product/product?id=${product.id}`,
      imageUrl: product.cover
    };
  }
});
