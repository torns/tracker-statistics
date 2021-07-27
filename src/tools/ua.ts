type BrowserName =
  | 'IE'
  | 'Chrome'
  | 'Firefox'
  | 'Opera'
  | 'Safari'
  | 'Edge'
  | '360Browser'
  | 'QQBrowser'
  | 'WeixinBrowser'

type OsName = 'Windows' | 'MacOS' | 'Android' | 'IOS'

interface Browser {
  name: BrowserName
  validate: boolean
}

interface Os {
  name: OsName
  validate: boolean
}

const _window: any = window
const _userAgent: any = navigator.userAgent.toLowerCase()

const browserList: Array<Browser> = [
  { name: 'IE', validate: _window.ActiveXObject || 'ActiveXObject' in _window },
  {
    name: 'Chrome',
    validate: _userAgent.indexOf('chrome') > -1 && _userAgent.indexOf('safari') > -1
  },
  { name: 'Firefox', validate: _userAgent.indexOf('firefox') > -1 },
  { name: 'Opera', validate: _userAgent.indexOf('opera') > -1 },
  {
    name: 'Safari',
    validate: _userAgent.indexOf('safari') > -1 && _userAgent.indexOf('chrome') === -1
  },
  { name: 'Edge', validate: _userAgent.indexOf('edge') > -1 },
  { name: 'QQBrowser', validate: /qqbrowser/.test(_userAgent) },
  { name: 'WeixinBrowser', validate: /MicroMessenger/i.test(_userAgent) }
]

const osList: Array<Os> = [
  { name: 'Windows', validate: _userAgent.indexOf('Windows') > -1 },
  { name: 'MacOS', validate: _userAgent.indexOf('Macintosh') > -1 },
  {
    name: 'Android',
    validate: _userAgent.indexOf('Android') > -1 || _userAgent.indexOf('Adr') > -1
  },
  { name: 'IOS', validate: _userAgent.indexOf('like Mac OS X') > -1 }
]

let _browserName: string = ''
let _browserVersion: string = ''
let _osName: string = ''
let _osVersion: string = ''

const browserName = (): BrowserName => {
  return browserList.filter(item => item.validate)[0].name
}

const ua = {
  browserName
}

export default ua

// const browserInfo = (type: 'name' | 'version'): string => {
//   for (let i in browserObj) {
//     if (browserObj[i]) { continue }
//
//     if (i === 'IE') {
//       version = UserAgent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2]
//     } else if (i === 'Chrome') {
//       for (let mt in navigator.mimeTypes) {
//         // 检测是否是360浏览器(测试只有pc端的360才起作用)
//         if (navigator.mimeTypes[mt]['type'] === 'application/360softmgrplugin') {
//           i = '360'
//         }
//       }
//       version = UserAgent.match(/chrome\/([\d.]+)/)[1]
//     } else if (i === 'Firefox') {
//       version = UserAgent.match(/firefox\/([\d.]+)/)[1]
//     } else if (i === 'Opera') {
//       version = UserAgent.match(/opera\/([\d.]+)/)[1]
//     } else if (i === 'Safari') {
//       version = UserAgent.match(/version\/([\d.]+)/)[1]
//     } else if (i === 'Edge') {
//       version = UserAgent.match(/edge\/([\d.]+)/)[1]
//     } else if (i === 'QQBrowser') {
//       version = UserAgent.match(/qqbrowser\/([\d.]+)/)[1]
//     }
//
//     name = i
//   }
//
//   return type === 'name' ? name : version
// }
//
// const osInfo = () => {
//   for (let i in osObj) {
//     if (osObj[i]) { continue }
//   }
// }
//
// export default browserInfo
