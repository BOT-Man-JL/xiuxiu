//circle-detail.js

import config from '../../resources/config'
import mockData from '../../resources/article-data'

Page({
  data: Object.assign({
    selected: true,
    selected1: false
  }, mockData),

  onLoad: function(options) {
    console.log(options.id)
  },

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
  }
})