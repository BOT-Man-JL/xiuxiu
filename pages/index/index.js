//index.js
//获取应用实例
import config from '../../utils/config'
import mockData from '../../resources/home/mock-data.js'

const app = getApp()

Page({
  data: Object.assign({
    hasFire: false,
    popupState: 'hide',
    bigImageSrc: ''
  }, mockData),
  onLoad() {
    console.log('onloaded')
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
  triggerFire(e) {
    const articleList = this.data.articleList
    const index = this.findIndexById(e.currentTarget.dataset.id)
    if (index == -1)
      return

    const hasFire = articleList[index].communityData.hasFire
    this.setData({
      ['articleList[' + index + '].communityData.hasFire']: !hasFire
    })

    const fireCount = articleList[index].communityData.fireCount
    if (typeof fireCount === 'number') {
      this.setData({
        ['articleList[' + index + '].communityData.fireCount']: hasFire ? (fireCount - 1) : (fireCount + 1)
      })
    }
  },
  onShareAppMessage(e) {
    let title = config.appName
    if (e.target) {
      const articleList = this.data.articleList
      const index = this.findIndexById(e.target.dataset.id)
      if (index != -1 && articleList[index].articleData.text) {
        title = articleList[index].articleData.text.substr(0, 32) + '...'
      }
    }

    return {
      title: title,
      path: '/page/index'
    }
  },
  findIndexById(id) {
    const articleList = this.data.articleList
    for (let i in articleList) {
      if (articleList[i].id == id) {
        return i
      }
    }

    console.error('triggerFire: Unable to find target item')
    return -1
  }
})
