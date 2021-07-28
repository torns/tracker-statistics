import sdkVersion from './sdk-version'
import userAgent from './user-agent'
import browserName from './browser-name'
import browserVersion from './browser-version'

interface Prefab {
  sdkVersion: string
  userAgent: string
  browserName: string
  browserVersion: string
}

const prefab: Prefab = {
  sdkVersion,
  userAgent,
  browserName,
  browserVersion
}

export { prefab }
