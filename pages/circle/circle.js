//circle.js

import config from '../../resources/config'
import mockData from '../../resources/circle/mock-data.js'

Page({
  data: Object.assign({}, mockData),
 
  jumpToBasePage(){
    wx.navigateTo({
      url: '../circle-base/circle-base'
    })
  }
})