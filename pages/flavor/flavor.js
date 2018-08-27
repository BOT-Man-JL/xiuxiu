// flavor.js

import config from '../../resources/config'
import mockData from '../../resources/flavor-data'

Page({
  data: Object.assign({}, mockData),

  promptUnsupported(e) {
    wx.showModal({
      title: config.appName,
      content: e.currentTarget.dataset.text,
      showCancel: false
    })
  }
})