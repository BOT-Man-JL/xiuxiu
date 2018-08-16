//index.js
//获取应用实例
import util from '../../utils/util'
import mockData from '../../resources/home/mock-data.js'

const app = getApp()

Page({
  data: Object.assign({
    popupState: 'hide',
    bigImageSrc: ''
  }, mockData),
  tempData: {
    isPopupShown: false
  },
  onLoad() {
    console.log('onloaded')
  },
  viewBigImage(e) {
    this.setData({
      bigImageSrc: e.target.dataset.src,
      popupState: ''
    })
    this.tempData.isPopupShown = true
  },
  hideBigImage(e) {
    if (!this.tempData.isPopupShown)
      return

    this.setData({
      popupState: 'fade'
    })
    this.tempData.isPopupShown = false

    // delay hiding to avoid 'display:none' issue
    setTimeout(() => {
      if (this.tempData.isPopupShown)
        return

      this.setData({
        popupState: 'hide'
      })
    }, 500)
  }
})