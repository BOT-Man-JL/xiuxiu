//unimplemented.js

import config from '../../resources/config'

Page({
  data: {},
  onShow: function() {
    wx.setNavigationBarTitle({
      title: config.notImplementedPage
    })
    wx.showModal({
      title: config.appName,
      content: config.notImplementedPage,
      showCancel: false,
      success: () => {
        wx.switchTab({
          url: '../index/index'
        })
      }
    })
  }
})