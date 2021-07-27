import sdkVersion from './sdk-version'
import userAgent from './user-agent'
import browser from './browser'

interface Prefab {
  sdkVersion: string
  userAgent: string
  browser: string
}

const prefab: Prefab = {
  sdkVersion,
  userAgent,
  browser
}

export { prefab }
