# xiuxiu

> Xiuxiu demo by Team 56.

## Data Structures

### Index

> 数据文件：[resources/home/mock-data.js](resources/home/mock-data.js)

``` js
export default {
  locationText: '希格玛大厦',
  articleList: [ {}, {}, ... ]
}
```

name | type | description | example
-----|------|-------------|--------
locationText | string | 当前用户位置 | `希格玛大厦`
articleList | array | 首页文章列表 |

#### articleList[0]

``` js
{
  id: '1',
  articleType: 'text',
  metaData: { },
  articleData: { },
  communityData: { }
}
```

name | type | description | example
-----|------|-------------|--------
id | string (unique) | 文章 ID | `1`
articleType | string | 文章类型 | `[text/picture/pictures/video/link]`
metaData | object | 元数据 |
articleData | object | 文章数据 |
communityData | object | 交互数据 |

#### metaData

``` js
metaData: {
  authorAvatar: 'http://...jpg',
  authorName: 'John Lee',
  timestamp: '一小时前',
  location: '知春路',
  circle: '希格玛大厦'
}
```

name | type | description | example
-----|------|-------------|--------
authorAvatar | string | 作者头像 url | `http://...[jpg/png]`
authorName | string | 作者名称 | `John`
timestamp | string | 条目时间戳 | `一小时前`
location | string (optional) | 地理位置 | `知春路`
circle | string (optional) | 圈子名称 | `希格玛大厦`

> 如果存在 `circle`，则不显示 `location`（两者必选一个）

#### articleData

``` js
articleData: {
  text: '...',
  picture: {
    src: 'http://...jpg'
  },
  pictures: [{
    src: 'http://...jpg'
  }, {
    src: 'http://...jpg'
  }, {
    src: 'http://...jpg'
  }],
  video: {
    poster: 'http://...jpg',
    src: 'http://...'
  },
  link: {
    thumb: 'http://...jpg',
    abstractText: '...',
    targetUrl: 'http://...'
  }
}
```

name | type | description | example
-----|------|-------------|--------
text | string | 文章正文 | `...`
picture | object | 图片数据（`articleType: 'picture'`） |
picture.src | string | 图片 url | `http://...[jpg/png]`
pictures | array | 图集数据（`articleType: 'pictures'`） |
pictures[0].src | string | 图集中图片 url | `http://...[jpg/png]`
video | object | 视频数据（`articleType: 'video'`） |
video.poster | string | 视频封面图片 url | `http://...[jpg/png]`
video.src | string | 视频来源 url（暂时无效） | `http://...`
link | object | 外链数据（`articleType: 'link'`） |
link.thumb | string | 外链缩略图 | `http://...[jpg/png]`
link.abstractText | string | 外链摘要文本 | `...`
link.targetUrl | string | 外链地址 url（暂时无效） | `http://...`

#### articleData

``` js
communityData: {
  hasFire: true,
  fireCount: 666,
  commentCount: 998
}
```

name | type | description | example
-----|------|-------------|--------
hasFire | boolean (optional) | 是否已加火 | `true/false`
fireCount | number | 加火数目 | 666
commentCount | number | 评论数目 | 998

## Resources

**WARNING**: DON'T add password/appid/key to this document!

- Design: https://modao.cc/app/428fb4cafb14592201b82e37874b86c4ac033360?inapp=1
- Tutorial: https://github.com/ikcamp/wechat-xcx-tutorial
- Wechat Side Page: https://mp.weixin.qq.com/

``` bash
ls *.svg | while read file
do
  inkscape -f $file -w 64 -h 64 -e `echo $file | sed 's/\.svg/\.png/'`
done
```
