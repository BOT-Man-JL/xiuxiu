# xiuxiu

> Xiuxiu demo by Team 56.

## Data Structures

### Index

``` json

{
  "articleList": [
    {
      "id": "1234"
      "title": "超好看的图集"
      "abstract": "这个图集真好看..."
      "type": "pictures"
      "picturesNum": "3"
      "picturesUrlList": ["图片地址1","图片地址2","图片地址3"]
      "location": "知春路"
      "timestamp" : "1533979393"
      "userName": "zhangsan"
      "avatar": "头像地址"
      "fireNum": "202"
      "commentNum": "200"
    },
    {
      "id": "1234"
      "title": "超好看的图片"
      "abstract": "这个图片真好看..."
      "type": "bigPicture"
      "bigPictureUrl": "图片地址"
      "location": "知春路"
      "timestamp" : "1533979393"
      "userName": "zhangsan"
      "avatar": "头像地址"
      "fireNum": "202"
      "commentNum": "200"
    },
    {
      "id": "1234"
      "title": "超好看的video"
      "abstract": "这个视频真好看..."
      "type": "video"
      "videoUrl":"https://www.youtube.com/watch?v=8j9zMok6two"
      "visitCount": "132"
      "videoTime": "01:42"
      "location": "知春路"
      "timestamp" : "1533979393"
      "userName": "张三"
      "avatar": "头像地址"
      "fireNum": "202"
      "commentNum": "200"
    },
    {
      "id": "1234"
      "title": "超好看的文章"
      "abstract": "这个文章真好看..."
      "type": "article"
      "location": "知春路"
      "timestamp" : "1533979393"
      "userName": "zhangsan"
      "avatar": "头像地址"
      "fireNum": "202"
      "commentNum": "200"
    },
    {
      "id": "1234"
      "title": "超好看的链接文章"
      "abstract": "这个链接文章真好看..."
      "linkAbstract": "据说看过这个超链文章..."
      "linkPicture": "链接中的图片地址"
      "type": "linkArticle"
      "linkUrl": "链接地址"
      "location": "知春路"
      "timestamp" : "1533979393"
      "userName": "zhangsan"
      "avatar": "头像地址"
      "fireNum": "202"
      "commentNum": "200"
    }
  ]
}

```

## Resources

**WARNING**: DON'T add password/appid/key to this document!

- Tutorial: https://github.com/ikcamp/wechat-xcx-tutorial
- Wechat Side Page: https://mp.weixin.qq.com/

``` bash
ls *.svg | while read file
do
  inkscape -f $file -w 64 -h 64 -e `echo $file | sed 's/\.svg/\.png/'`
done
```
