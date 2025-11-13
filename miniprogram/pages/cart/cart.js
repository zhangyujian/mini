const cart = require('../../utils/cart');

function calculateTotals(items) {
  return items.reduce(
    (acc, item) => {
      acc.quantity += item.quantity;
      acc.amount += item.quantity * item.price;
      return acc;
    },
    { quantity: 0, amount: 0 }
  );
}

Page({
  data: {
    items: [],
    totalQuantity: 0,
    totalAmount: '0.00'
  },

  onShow() {
    this.refreshCart();
  },

  refreshCart() {
    const items = cart.getCart();
    const totals = calculateTotals(items);
    this.setData({
      items,
      totalQuantity: totals.quantity,
      totalAmount: totals.amount.toFixed(2)
    });
  },

  changeQuantity(event) {
    const { id, step } = event.currentTarget.dataset;
    const item = this.data.items.find((record) => record.id === id);
    if (!item) {
      return;
    }

    const nextQuantity = item.quantity + Number(step);
    cart.updateQuantity(id, nextQuantity);
    this.refreshCart();
  },

  removeItem(event) {
    const { id } = event.currentTarget.dataset;
    wx.showModal({
      title: '提示',
      content: '确定移除该商品吗？',
      success: (res) => {
        if (res.confirm) {
          cart.removeItem(id);
          this.refreshCart();
        }
      }
    });
  },

  clearCart() {
    wx.showModal({
      title: '清空购物车',
      content: '确定要清空所有商品吗？',
      success: (res) => {
        if (res.confirm) {
          cart.clearCart();
          this.refreshCart();
        }
      }
    });
  },

  goToCatalog() {
    wx.switchTab({
      url: '/pages/catalog/catalog'
    });
  },

  checkout() {
    if (this.data.items.length === 0) {
      wx.showToast({
        title: '购物车为空',
        icon: 'none'
      });
      return;
    }

    wx.showModal({
      title: '提交订单',
      content: `共 ${this.data.totalQuantity} 件商品，总计 ￥${this.data.totalAmount}\n确认提交吗？`,
      success: (res) => {
        if (res.confirm) {
          cart.clearCart();
          this.refreshCart();
          wx.showToast({
            title: '下单成功',
            icon: 'success'
          });
        }
      }
    });
  }
});
