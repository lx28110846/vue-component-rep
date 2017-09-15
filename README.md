# Vue组件仓库

### 转盘
```html
<zhuanpan :prizeList="prizeList" :loterry="loterry" :preAction="preAction" :afterAction="afterAction"></zhuanpan>
```
###### prizeList: 初始化转盘奖品区域
```js
prizeList: [{name: '一等奖'}, {name: '二等奖'}, {name: '三等奖'}, {name: '四等奖'}, {name: '五等奖'}, {name: '六等奖'}, {name: '七等奖'}, {name: '八等奖'}, {name: '九等奖'}, {name: '十等奖'}]
```
###### loterry: 中奖的index
如，loterry=0转动后会中一等奖，loterry=1转动后会中二等奖
###### preAction: fn，转动前执行
用于向服务端请求中奖的奖品loterry的值
###### afterAction：fn，转动停止后执行
用于停止后进行下一步操作
