const noWindow = () => {
  if (!window) {
    console.error('您当前的系统环境不支持使用该版本SDK！')
  }
}

export default noWindow
