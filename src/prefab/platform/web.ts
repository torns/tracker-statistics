import UAParser from 'ua-parser-js'
import { Prefab } from '../types'

const _navigator: any = window ? window.navigator : {}

const url = () => {
  const _location = window ? window.location : {
    href: '',
    protocol: '',
    host: '',
    hostname: '',
    port: '',
    pathname: '',
    search: '',
    hash: ''
  }

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

const webPrefab = (sdkVersion: string): Prefab => {
  return {
    ...new UAParser().getResult(),
    sdkVersion,
    network: _navigator.connection ? _navigator.connection.effectiveType : undefined,
    referrer: window ? window.document.referrer : '', // 前一个页面
    url: url(),
    timestamp: new Date().getTime()
  }
}

export default webPrefab
