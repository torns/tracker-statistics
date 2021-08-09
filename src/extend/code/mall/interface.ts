import { Namespace, BaseReturn, DataProps } from '../interface'

interface FilterReturn extends BaseReturn {
  name: string
  sort: string | undefined
}

interface SearchReturn extends BaseReturn {
  content: string
}

interface DetailReturn extends BaseReturn {
  id: string | number
  title: string
}

interface FilterAchieve {
  <Opt extends FilterReturn>(
    name: string,
    sort: string | undefined,
    data?: DataProps | undefined
  ): FilterReturn
}

interface SearchAchieve {
  <Opt extends SearchReturn>(content: string, data?: DataProps | undefined): SearchReturn
}

interface DetailAchieve {
  <Opt extends DetailReturn>(
    id: string | number,
    title: string,
    data?: DataProps | undefined
  ): DetailReturn
}

interface MallNamespace {
  shopList: Namespace
  shopFilterList: Namespace
  shopCategoryList: Namespace
  shopDetail: Namespace
  shopSearch: Namespace
  shopCart: Namespace
  shopBuy: Namespace
  shopCollect: Namespace
  shopUncollect: Namespace
  shopShare: Namespace
  shopQa: Namespace
  shopComment: Namespace
}

export { MallNamespace, FilterAchieve, SearchAchieve, DetailAchieve }
