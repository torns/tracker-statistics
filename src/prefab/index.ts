// @ts-ignore
import * as pkg from '../../package.json'
import UAParser from 'ua-parser-js'
import { Url, Prefab } from './types'

const _navigator: any = window.navigator
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
    ...new UAParser().getResult(),
    sdkVersion: pkg.version,
    network: _navigator.connection ? _navigator.connection.effectiveType : undefined,
    referrer: window.document.referrer, // 前一个页面
    url: url(),
    timestamp: new Date().getTime()
  }
}

export default prefab
