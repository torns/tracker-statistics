// import browserInfo from '../tools/browser'

// const browser = browserInfo('name') as string

import ua from '../tools/ua'

const browserName = ua.browserName()

export default browserName
