import { IResult } from 'ua-parser-js'

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

interface Prefab extends IResult {
  sdkVersion: string
  usageMethod: UsageMethod
  network: string
  url: Url
  referrer: string
  timestamp: number
}

export { Url, Prefab }
