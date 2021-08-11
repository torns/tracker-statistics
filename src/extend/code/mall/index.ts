import mallNamespace from './namespace'
import { BaseAchieve } from '../interface'
import { DetailAchieve, FilterAchieve, SearchAchieve } from './interface'

const shopList: BaseAchieve = data => {
  window.sessionStorage.setItem(
    'tempBrowseInfo',
    JSON.stringify({ ...mallNamespace.shopList, timestamp: new Date().getTime() })
  )
  return { behavior: mallNamespace.shopList, ...{ data } } // 如果要区分全部商品列表或搜索的商品列表，可以使用data进行扩展
}

const shopFilterList: FilterAchieve = (name, sort, data) => {
  return { behavior: mallNamespace.shopFilterList, name, sort, ...{ data } }
}

const shopCategoryList: BaseAchieve = data => {
  window.sessionStorage.setItem(
    'tempBrowseInfo',
    JSON.stringify({ ...mallNamespace.shopCategoryList, timestamp: new Date().getTime() })
  )
  return { behavior: mallNamespace.shopCategoryList, ...{ data } }
}

const shopDetail: DetailAchieve = (id, title, data) => {
  window.sessionStorage.setItem(
    'tempBrowseInfo',
    JSON.stringify({ ...mallNamespace.shopDetail, timestamp: new Date().getTime() })
  )
  return { behavior: mallNamespace.shopDetail, id, title, ...{ data } }
}

const shopSearch: SearchAchieve = (content, data) => {
  return { behavior: mallNamespace.shopSearch, content, ...{ data } }
}

const shopCart: DetailAchieve = (id, title, data) => {
  return { behavior: mallNamespace.shopCart, id, title, ...{ data } }
}

const shopBuy: DetailAchieve = (id, title, data) => {
  return { behavior: mallNamespace.shopBuy, id, title, ...{ data } }
}

const shopCollect: DetailAchieve = (id, title, data) => {
  return { behavior: mallNamespace.shopCollect, id, title, ...{ data } }
}

const shopUncollect: DetailAchieve = (id, title, data) => {
  return { behavior: mallNamespace.shopUncollect, id, title, ...{ data } }
}

const shopShare: DetailAchieve = (id, title, data) => {
  return { behavior: mallNamespace.shopShare, id, title, ...{ data } }
}

const shopQa: DetailAchieve = (id, title, data) => {
  window.sessionStorage.setItem(
    'tempBrowseInfo',
    JSON.stringify({ ...mallNamespace.shopQa, timestamp: new Date().getTime() })
  )
  return { behavior: mallNamespace.shopQa, id, title, ...{ data } }
}

const shopComment: DetailAchieve = (id, title, data) => {
  window.sessionStorage.setItem(
    'tempBrowseInfo',
    JSON.stringify({ ...mallNamespace.shopComment, timestamp: new Date().getTime() })
  )
  return { behavior: mallNamespace.shopComment, id, title, ...{ data } }
}

const mall = {
  shopList,
  shopFilterList,
  shopCategoryList,
  shopDetail,
  shopSearch,
  shopCart,
  shopBuy,
  shopCollect,
  shopUncollect,
  shopShare,
  shopQa,
  shopComment
}

export default mall
