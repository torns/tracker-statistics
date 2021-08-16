// @ts-ignore
import * as pkg from '../../package.json'
import UAParser from 'ua-parser-js'
import { Url, Prefab } from './interface'

const parser = new UAParser()
const _navigator: any = navigator
const url = () => {
  const _location: Url = window.location

  return {
    href: _location.href,
    protocol: _location.protocol,
    host: _location.host,
    hostname: _location.hostname,
    port: _location.port,
    pathname: _location.pathname,
    search: _location.search,
    hash: _location.hash
  }
}

const prefab = (): Prefab => {
  return {
    ...parser.getResult(),
    sdkVersion: pkg.version,
    network: _navigator.connection ? _navigator.connection.effectiveType : undefined,
    referrer: window.document.referrer, // 前一个页面
    url: url(),
    timestamp: new Date().getTime(),
    usageMethod: undefined
  }
}

export default prefab // TODO: 在发送接口时候混入进去
