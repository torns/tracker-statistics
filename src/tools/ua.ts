type BrowserName =
  | 'IE'
  | 'Chrome'
  | 'Firefox'
  | 'Opera'
  | 'Safari'
  | 'Edge'
  | 'QQBrowser'
  | 'WeixinBrowser'

type OsName = 'Windows' | 'MacOS' | 'Android' | 'IOS'

interface Browser {
  name: BrowserName
  validate: boolean
  version: string
}

interface Os {
  name: OsName
  validate: boolean
}

interface Ua {
  browserName: Function
  browserVersion: Function
}

const _window: any = window
const _userAgent: any = navigator.userAgent.toLowerCase()

const browserList: Array<Browser> = [
  {
    name: 'IE',
    validate: _window.ActiveXObject || 'ActiveXObject' in _window,
    version: _userAgent.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1')
  },
  {
    name: 'Chrome',
    validate: _userAgent.indexOf('chrome') > -1 && _userAgent.indexOf('safari') > -1,
    version: _userAgent.match(/chrome\/([\d.]+)/)[1]
  },
  {
    name: 'Firefox',
    validate: _userAgent.indexOf('firefox') > -1,
    version: _userAgent
      .replace(/^.*Firefox\/([\d.]+).*$/, '$1')
      .replace(/^.*FxiOS\/([\d.]+).*$/, '$1')
  },
  {
    name: 'Opera',
    validate: _userAgent.indexOf('opera') > -1,
    version: _userAgent.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1')
  },
  {
    name: 'Safari',
    validate: _userAgent.indexOf('safari') > -1 && _userAgent.indexOf('chrome') === -1,
    version: _userAgent.replace(/^.*Version\/([\d.]+).*$/, '$1')
  },
  {
    name: 'Edge',
    validate: _userAgent.indexOf('edge') > -1,
    version: _userAgent.replace(/^.*Edge\/([\d.]+).*$/, '$1')
  },
  {
    name: 'QQBrowser',
    validate: /qqbrowser/.test(_userAgent),
    version: _userAgent.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1')
  },
  {
    name: 'WeixinBrowser',
    validate: /MicroMessenger/i.test(_userAgent),
    version: _userAgent.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1')
  }
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

const browserName = (): BrowserName => {
  return browserList.filter(item => item.validate)[0].name
}

const browserVersion = (): string => {
  return browserList.filter(item => item.validate)[0].version
}

const ua: Ua = {
  browserName,
  browserVersion
}

export default ua

//
// const osInfo = () => {
//   for (let i in osObj) {
//     if (osObj[i]) { continue }
//   }
// }
//
// export default browserInfo
