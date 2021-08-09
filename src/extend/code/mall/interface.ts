import Namespace from '../interface'

interface MallShopNamespace {
  list: Namespace
  filterList: Namespace
  categoryList: Namespace
  detail: Namespace
  search: Namespace
  cart: Namespace
  buy: Namespace
  collect: Namespace
  uncollect: Namespace
  share: Namespace
  qa: Namespace
  comment: Namespace
}

interface MallOrderNamespace {
  list: Namespace
  detail: Namespace
}

interface MallNamespace {
  shop: MallShopNamespace
  order: MallOrderNamespace
  shoppingCart: Namespace
  collectList: Namespace
  terms: Namespace
  policy: Namespace
  contactUs: Namespace
}

export default MallNamespace
