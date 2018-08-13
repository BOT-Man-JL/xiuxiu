//index.js
//获取应用实例
import util from '../../utils/util'
import mockData from '../../resources/home/mock-data.js'

const app = getApp()

Page({
  data: mockData,
  onLoad() {
    console.log('onloaded')
  }
})