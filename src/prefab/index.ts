// @ts-ignore
import * as pkg from '../../package.json'
import webPrefab from './platform/web'
import uniPrefab from './platform/uni'

const prefab = {
  web: webPrefab(pkg.version),
  uni: uniPrefab(pkg.version)
}

export default prefab
