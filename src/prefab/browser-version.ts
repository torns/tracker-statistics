// import browserInfo from '../tools/browser'

// const browserVersion = browserInfo('version') as string
import ua from '../tools/ua'

const browserVersion = ua.browserVersion()

export default browserVersion
