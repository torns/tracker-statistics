// @ts-ignore
import * as pkg from '../../package.json'
import UAParser, { IResult } from 'ua-parser-js'

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

interface Prefab extends IResult {
  sdkVersion: string
  network: string
  url: Url
  referrer: string
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

const prefab = parser.getResult() as Prefab

prefab['sdkVersion'] = pkg.version
prefab['network'] = _navigator.connection ? _navigator.connection.effectiveType : undefined
prefab['referrer'] = window.document.referrer
prefab['url'] = url

export default prefab
