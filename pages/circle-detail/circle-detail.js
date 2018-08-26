//circle-detail.js

import config from '../../resources/config'
import mockData from '../../resources/circle-data'

Page({
  data: Object.assign({
    selectedTab: 'selected',
    currentCircle: {}
  }, mockData),

  onLoad: function(options) {
    const index = this._findIndexById(options.id)
    if (index == -1)
      return

    this.setData({
      currentCircle: this.data.circleList[index]
    })
  },

  selectTab: function(e) {
    this.setData({
      selectedTab: e.currentTarget.dataset.tab
    })
  },

  _findIndexById(id) {
    const circleList = this.data.circleList
    for (let i in circleList) {
      if (circleList[i].id == id) {
        return i
      }
    }

    console.error('error: Unable to find target item')
    return -1
  }
})