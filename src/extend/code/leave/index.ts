import leaveNamespace from './namespace'
import { BaseAchieve } from '../interface'

const leavePage: BaseAchieve = data => {
  return {
    behavior: leaveNamespace.page,
    browseTime:
      new Date().getTime() -
      JSON.parse(window.sessionStorage.getItem('tempBrowseInfo') as string).timestamp,
    ...{ data }
  }
}

const leave = {
  leavePage
}

export default leave
