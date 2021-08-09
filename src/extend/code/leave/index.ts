import leaveNamespace from './namespace'
import { BaseAchieve } from '../interface'

const leavePage: BaseAchieve = data => {
  return { behavior: leaveNamespace.page, ...{ data } }
}

const leave = {
  leavePage
}

export default leave
