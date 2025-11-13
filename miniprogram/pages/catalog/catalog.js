const app = getApp();

function filterProducts(products, categoryId, keyword) {
  return products
    .filter((product) =>
      categoryId ? product.categoryId === categoryId : true
    )
    .filter((product) =>
      keyword
        ? product.name.includes(keyword) || product.tags.some((tag) => tag.includes(keyword))
        : true
    );
}

Page({
  data: {
    categories: [],
    products: [],
    filteredProducts: [],
    activeCategory: '',
    searchKeyword: ''
  },

  onLoad(options) {
    const { categories, products } = app.globalData;
    const activeCategory = options.categoryId || (categories[0] && categories[0].id) || '';

    this.setData({
      categories,
      products,
      activeCategory,
      filteredProducts: filterProducts(products, activeCategory, '')
    });
  },

  onShow() {
    const { products } = app.globalData;
    this.setData({
      products,
      filteredProducts: filterProducts(
        products,
        this.data.activeCategory,
        this.data.searchKeyword
      )
    });
  },

  onCategoryTap(event) {
    const { id } = event.currentTarget.dataset;
    this.setData({
      activeCategory: id,
      filteredProducts: filterProducts(this.data.products, id, this.data.searchKeyword)
    });
  },

  onSearchChange(event) {
    const keyword = event.detail.value.trim();
    this.setData({
      searchKeyword: keyword,
      filteredProducts: filterProducts(this.data.products, this.data.activeCategory, keyword)
    });
  },

  goToProduct(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/product/product?id=${id}`
    });
  }
});
