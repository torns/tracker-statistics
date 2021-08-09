import leaveNamespace from './namespace'

const leave = {
  page: (data?: object) => {
    return { behavior: leaveNamespace.page, ...{ data } }
  }
}

export default leave
