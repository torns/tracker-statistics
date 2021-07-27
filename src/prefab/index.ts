import sdkVersion from './sdk-version'
import userAgent from './user-agent'
import browserName from './browser-name'

interface Prefab {
  sdkVersion: string
  userAgent: string
  browserName: string
}

const prefab: Prefab = {
  sdkVersion,
  userAgent,
  browserName
}

export { prefab }
