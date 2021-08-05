import mallNamespace from './namespace'

const shop = {
  list: (data?: object) => {
    return { behavior: mallNamespace.shop.list, ...{ data } } // 如果要区分全部商品列表或搜索的商品列表，可以使用data进行扩展
  },
  categoryList: (data?: object) => {
    return { behavior: mallNamespace.shop.categoryList, ...{ data } }
  },
  detail: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.detail, id, title, ...{ data } }
  },
  search: (content: string, data?: object) => {
    return { behavior: mallNamespace.shop.search, content, ...{ data } }
  },
  cart: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.cart, id, title, ...{ data } }
  },
  buy: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.buy, id, title, ...{ data } }
  },
  collect: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.collect, id, title, ...{ data } }
  },
  uncollect: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.uncollect, id, title, ...{ data } }
  },
  share: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.share, id, title, ...{ data } }
  },
  qa: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.qa, id, title, ...{ data } }
  },
  comment: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.comment, id, title, ...{ data } }
  }
}

// const setting = {
//   terms: (data?: object) => {
//     return { behavior: mallNamespace.setting.terms, ...{ data } }
//   },
//   policy: (data?: object) => {
//     return { behavior: mallNamespace.setting.policy, ...{ data } }
//   }
// }

const mall = {
  shop
}

export default mall
