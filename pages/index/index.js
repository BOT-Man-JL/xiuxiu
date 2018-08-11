//index.js
//获取应用实例
import util from '../../utils/util'

const app = getApp()

Page({
  data: {
    articleList: [{
      id: '1234',
      articleType: 'text',
      authorAvatar: 'https://n1image.hjfile.cn/mh/2017/06/26/9ffa8c56cfd76cf5159011f4017f022e.jpg',
      authorName: 'John Lee',
      timestamp: '一小时前',
      location: '知春路',
      articleData: {
        text: '十号线地铁里竟然有个女生在抽烟，有个大爷提醒她，女生居然还大骂大爷...大家怎么看？十号线地铁里竟然有个女生在抽烟，大家怎么看？'
      },
      fireNum: 998,
      commentNum: 998
    }, {
      id: '12345',
      articleType: 'picture',
      authorAvatar: 'https://n1image.hjfile.cn/mh/2017/06/26/9ffa8c56cfd76cf5159011f4017f022e.jpg',
      authorName: 'John Lee',
      timestamp: '一小时前',
      location: '知春路',
      articleData: {
        text: '十号线地铁里竟然有个女生在抽烟，有个大爷提醒她，女生居然还大骂大爷...大家怎么看？十号线地铁里竟然有个女生在抽烟，大家怎么看？',
        picture: {
          url: 'https://avatars0.githubusercontent.com/u/17026165?s=400&v=4'
        }
      },
      fireNum: 998,
      commentNum: 998
    }, {
      id: '12345',
      articleType: 'pictures',
      authorAvatar: 'https://n1image.hjfile.cn/mh/2017/06/26/9ffa8c56cfd76cf5159011f4017f022e.jpg',
      authorName: 'John Lee',
      timestamp: '一小时前',
      location: '知春路',
      articleData: {
        text: '十号线地铁里竟然有个女生在抽烟，有个大爷提醒她，女生居然还大骂大爷...大家怎么看？十号线地铁里竟然有个女生在抽烟，大家怎么看？',
        pictures: [{
          url: 'https://avatars0.githubusercontent.com/u/17026165?s=400&v=4'
        }, {
          url: 'https://avatars0.githubusercontent.com/u/17026165?s=400&v=4'
        }, {
          url: 'https://avatars0.githubusercontent.com/u/17026165?s=400&v=4'
        }]
      },
      fireNum: 998,
      commentNum: 998
    }, {
      id: '12345',
      articleType: 'pictures',
      authorAvatar: 'https://n1image.hjfile.cn/mh/2017/06/26/9ffa8c56cfd76cf5159011f4017f022e.jpg',
      authorName: 'John Lee',
      timestamp: '一小时前',
      location: '知春路',
      articleData: {
        thumb: 'https://n1image.hjfile.cn/mh/2017/06/26/9ffa8c56cfd76cf5159011f4017f022e.jpg',
        abstractText: '十号线地铁里竟然有个女生在抽烟，有个大爷提醒她，女生居然还大骂大爷...大家怎么看？十号线地铁里竟然有个女生在抽烟，大家怎么看？'
      },
      fireNum: 998,
      commentNum: 998
    }]
  },
  onLoad() {
    console.log('onloaded')
  }
})