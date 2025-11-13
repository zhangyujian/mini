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
      title: 'Remove item',
      content: 'Are you sure you want to remove this product from your cart?',
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
      title: 'Clear cart',
      content: 'This will remove all items from your cart. Continue?',
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
        title: 'Cart is empty',
        icon: 'none'
      });
      return;
    }

    wx.showModal({
      title: 'Place order',
      content: `You are ordering ${this.data.totalQuantity} item(s) for $${this.data.totalAmount}. Continue to checkout?`,
      success: (res) => {
        if (res.confirm) {
          cart.clearCart();
          this.refreshCart();
          wx.showToast({
            title: 'Order placed',
            icon: 'success'
          });
        }
      }
    });
  }
});
