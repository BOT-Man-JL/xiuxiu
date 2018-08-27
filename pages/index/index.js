//index.js

import config from '../../resources/config'
import mockData from '../../resources/article-data'

Page({
  data: Object.assign({}, mockData),

  onPullDownRefresh() {
    const locationText = this.data.locationText
    const articleList = this.data.articleList
    const pulldownPrompt = this.data.pageData.pulldownPrompt
    this.setData({
      locationText: config.locatingPrompt,
      articleList: [],
      'pageData.pulldownPrompt': ''
    }, () => {
      setTimeout(() => {
        this.setData({
          locationText: locationText,
          articleList: articleList,
          'pageData.pulldownPrompt': pulldownPrompt
        })
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }, config.loadingTime)
    })
    wx.showLoading({
      title: config.loadingPrompt
    })
  }
})