// my.js

import config from '../../resources/config'

Page({
  data: {},

  promptUnsupported(e) {
    wx.showModal({
      title: config.appName,
      content: e.currentTarget.dataset.text,
      showCancel: false
    })
  }
})