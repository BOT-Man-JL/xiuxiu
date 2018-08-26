//circle-base

import config from '../../resources/config'
import mockData from '../../resources/home/mock-data.js'

Page({
  data: Object.assign({
    selected: true,
    selected1: false,
    hasFire: false,
    popupState: 'hide',
    bigImageSrc: ''
  }, mockData),

  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  viewBigImage(e) {
    this.setData({
      bigImageSrc: e.currentTarget.dataset.src,
      popupState: ''
    })
  },

  hidePopup(e) {
    if (this.data.popupState)
      return

    this.setData({
      popupState: 'fade'
    })

    // delay hiding to avoid 'display:none' issue
    setTimeout(() => {
      if (!this.data.popupState)
        return

      this.setData({
        popupState: 'hide'
      })
    }, 500)
  },

  onLoad: function(options) {
    console.log(options.id)
  }
})