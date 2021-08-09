import MallNamespace from './interface'

const mallNamespace: MallNamespace = {
  shop: {
    list: { name: 'shop-list', cname: '浏览商品列表', type: 'browse' },
    filterList: { name: 'shop-filter-list', cname: '点击商品列表筛选', type: 'click' },
    categoryList: { name: 'shop-category-list', cname: '浏览商品分类列表', type: 'browse' },
    detail: { name: 'shop-detail', cname: '浏览商品详情', type: 'browse' },
    search: { name: 'shop-search', cname: '搜索商品', type: 'click' },
    cart: { name: 'shop-cart', cname: '加入购物车', type: 'click' },
    buy: { name: 'shop-buy-now', cname: '立即购买', type: 'click' },
    collect: { name: 'shop-collect', cname: '收藏商品', type: 'click' },
    uncollect: { name: 'shop-uncollect', cname: '取消收藏商品', type: 'click' },
    share: { name: 'shop-share', cname: '分享商品', type: 'click' },
    qa: { name: 'shop-qa', cname: '浏览商品问答', type: 'browse' },
    comment: { name: 'shop-comment', cname: '浏览商品评论', type: 'browse' }
  },
  order: {
    list: { name: 'order-list', cname: '浏览订单列表', type: 'browse' },
    detail: { name: 'order-detail', cname: '浏览订单详情', type: 'browse' }
  },
  shoppingCart: { name: 'shopping-cart', cname: '浏览购物车列表', type: 'browse' },
  collectList: { name: 'collect-list', cname: '浏览收藏列表', type: 'browse' },
  terms: { name: 'setting-terms', cname: '浏览条款', type: 'browse' },
  policy: { name: 'setting-policy', cname: '浏览政策', type: 'browse' },
  contactUs: { name: 'contact-us', cname: '联系我们', type: 'click' }
}

export default mallNamespace
