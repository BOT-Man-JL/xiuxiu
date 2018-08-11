import config from './config'

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const DEFAULT_REQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    "Content-Type": "application/json"
  },
  method: 'GET',
  dataType: 'json'
}

module.exports = {
  formatTime: formatTime,
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlertMsg) {
    if ('object' === typeof content) {
      content = this.isDEV && JSON.stringify(content) || config.defaultAlertMsg
    }
    wx.showModal({
      title: title,
      content: content
    })
  },
  request(opt) {
    let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt)
    let { url, data, header, method, dataType } = options
    let self = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        header: header,
        method: method,
        dataType: dataType,
        success: function (res) {
          if (res && res.statusCode == 200 && res.data) {
            resolve(res.data);
          } else {
            self.alert('提示', res);
            reject(res);
          }
        },
        fail: function (err) {
          self.log(err);
          self.alert('提示', err);
          reject(err);
        }
      })
    })
  }
}
