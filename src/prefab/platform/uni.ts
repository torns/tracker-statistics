const uniPrefab = (sdkVersion: string) => {
  return {
    sdkVersion,
    // @ts-ignore
    network: wx.getNetworkType(),
    timestamp: new Date().getTime()
  }
}

export default uniPrefab
