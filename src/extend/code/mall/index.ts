import mallNamespace from './namespace'

const shop = {
  list: (data?: object) => {
    return { behavior: mallNamespace.shop.list, ...{ data } }
  },
  detail: (id: number | string, title: string, data?: object) => {
    return { behavior: mallNamespace.shop.detail, id, title, ...{ data } }
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

const mall = {
  shop
}

export default mall
