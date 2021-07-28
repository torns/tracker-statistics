// @ts-ignore
import * as pkg from '../../package.json'
import UAParser, { IResult } from 'ua-parser-js'

interface Prefab extends IResult {
  sdkVersion: string
  network: string
}

const parser = new UAParser()
const _navigator: any = navigator
const prefab = parser.getResult() as Prefab

prefab['sdkVersion'] = pkg.version
prefab['network'] = _navigator.connection ? _navigator.connection.effectiveType : ''

export default prefab
