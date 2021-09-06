import { IResult } from 'ua-parser-js'

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
  timestamp: number
}

export { Url, Prefab }
