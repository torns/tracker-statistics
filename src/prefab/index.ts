// @ts-ignore
import * as pkg from '../../package.json'
import webPrefab from './platform/web'

const prefab = {
  web: webPrefab(pkg.version)
}

export default prefab
