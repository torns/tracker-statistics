interface Namespace {
  name: string
  cname: string
  type: 'click' | 'browse'
}

interface Shop {
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
