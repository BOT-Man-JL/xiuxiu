//circle.js

import config from '../../resources/config'
import mockData from '../../resources/circle-data.js'

Page({
  data: Object.assign({
    followedListState: ''
  }, mockData),

  onLoad() {
    this._updateFollowed()
  },

  navigateToDetailPage(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/circle-detail/circle-detail?id=' + id
    })
  },

  toggleLike(e) {
    const circleList = this.data.circleList
    const index = this._findIndexById(e.currentTarget.dataset.id)
    if (index == -1)
      return

    const hasLike = circleList[index].hasLike
    this.setData({
      ['circleList[' + index + '].hasLike']: !hasLike
    })
    this._updateFollowed()
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
  },

  _updateFollowed() {
    const hasLike = this.data.circleList.some(e => e.hasLike)
    this.setData({
      followedListState: hasLike ? '' : 'fade'
    })

    if (!hasLike) {
      // delay hiding to avoid 'display:none' issue
      setTimeout(() => {
        if (!this.data.followedListState)
          return

        this.setData({
          followedListState: 'hide'
        })
      }, 500)
    }
  },

  promptUnsupported(e) {
    wx.showModal({
      title: config.appName,
      content: e.currentTarget.dataset.text,
      showCancel: false
    })
  }
})