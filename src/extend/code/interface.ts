interface Namespace {
  readonly name: string
  readonly cname: string
  code?: number
  readonly type: 'click' | 'browse' | 'leave'
}

interface DataProps {
  [dataProps: string]: string | number
}

interface BaseReturn {
  data: DataProps | undefined
  behavior: Namespace
}

interface BaseAchieve {
  <Opt extends BaseReturn>(data?: DataProps | undefined): BaseReturn
}

export { Namespace, DataProps, BaseReturn, BaseAchieve }
