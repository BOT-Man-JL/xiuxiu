//index.js

import config from '../../resources/config'
import mockData from '../../resources/article-data'

Page({
  data: Object.assign({}, mockData),

  onPullDownRefresh() {
    const locationText = this.data.locationText
    const articleList = this.data.articleList
    this.setData({
      locationText: config.loadingPrompt,
      articleList: []
    }, () => {
      setTimeout(() => {
        this.setData({
          locationText: locationText,
          articleList: articleList
        })
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }, config.loadingTime)
    })
    wx.showLoading({
      title: config.loadingPrompt
    })
  },

  promptUnsupported(e) {
    wx.showModal({
      title: config.appName,
      content: e.currentTarget.dataset.text,
      showCancel: false
    })
  }
})