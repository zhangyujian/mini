const STORAGE_KEY = 'mini-mall-cart';

function getCart() {
  return wx.getStorageSync(STORAGE_KEY) || [];
}

function saveCart(cart) {
  wx.setStorageSync(STORAGE_KEY, cart);
  return cart;
}

function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      cover: product.cover,
      unit: product.unit,
      quantity
    });
  }

  return saveCart(cart);
}

function updateQuantity(id, quantity) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === id);

  if (index >= 0) {
    cart[index].quantity = quantity;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
  }

  return cart;
}

function removeItem(id) {
  const cart = getCart().filter((item) => item.id !== id);
  return saveCart(cart);
}

function clearCart() {
  wx.removeStorageSync(STORAGE_KEY);
  return [];
}

module.exports = {
  STORAGE_KEY,
  getCart,
  saveCart,
  addToCart,
  updateQuantity,
  removeItem,
  clearCart
};
