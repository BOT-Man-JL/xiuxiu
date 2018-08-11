# xiuxiu

> Xiuxiu demo by Team 56.

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
