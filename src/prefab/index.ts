// @ts-ignore
import * as pkg from '../../package.json'
import UAParser, { IResult } from 'ua-parser-js'

type UsageMethod = 'code' | 'visualization' | undefined

interface Url {
  href: string
  protocol: string
  host: string
  hostname: string
  port: string
  pathname: string
  search: string
  hash: string
}

interface Prefab {
  prefab: IResult
  sdkVersion: string
  usageMethod: UsageMethod
  network: string
  url: Url
  referrer: string
  timestamp: number
}

const parser = new UAParser()
const _navigator: any = navigator
const _location: Url = window.location
const url: Url = {
  href: _location.href,
  protocol: _location.protocol,
  host: _location.host,
  hostname: _location.hostname,
  port: _location.port,
  pathname: _location.pathname,
  search: _location.search,
  hash: _location.hash
}

// const prefab = parser.getResult() as Prefab
//
// prefab.sdkVersion = pkg.version
// prefab.network = _navigator.connection ? _navigator.connection.effectiveType : undefined
// prefab.referrer = window.document.referrer // 前一个页面
// prefab.url = url
// prefab.timestamp = new Date().getTime()
// prefab.usageMethod = undefined // TODO：后续会根据一个接口进行判断是代码埋点还是可视化埋点

const prefab = () => {
  return {
    prefab: parser.getResult(),
    sdkVersion: pkg.version,
    network: _navigator.connection ? _navigator.connection.effectiveType : undefined,
    referrer: window.document.referrer, // 前一个页面
    url,
    timestamp: new Date().getTime(),
    usageMethod: undefined
  }
}

export default prefab // TODO: 在发送接口时候混入进去
