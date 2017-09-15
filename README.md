# Vue组件仓库

### 转盘
```html
<zhuanpan ref="zhuanpan" :zWidth="'20rem'" :prizeList="prizeList" 
          :preAction="preAction" :afterAction="afterAction"></zhuanpan>
```
* zWidth: 指定组件宽度，如果不指定则撑满父元素

* prizeList: 初始化转盘奖品区域
```js
prizeList: [{name: '一等奖'}, {name: '二等奖'}, {name: '三等奖'}, {name: '四等奖'}, {name: '五等奖'}, {name: '六等奖'}, {name: '七等奖'}, {name: '八等奖'}, {name: '九等奖'}, {name: '十等奖'}]
```
* preAction: fn，转动前执行，用于向服务端请求中奖的奖品loterry的值
```js
this.$refs.zhuanpan.start(this.loterry)
在preAction中，获取loterry后需要调用子组件的start方法将loterry值传入，开始旋转抽奖
这里要注意在preAction中做防重复提交
```

* afterAction: fn，转动停止后执行，用于停止后进行下一步操作
