const noInitUrl = () => {
  const url = JSON.parse(window.sessionStorage.getItem('tempInit') as string).url

  if (!url) {
    console.error('没有通过 init 方法初始化 url ！')
  }
}

export default noInitUrl
