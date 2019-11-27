# PotatoModal 弹窗

## API
|       参数     |        说明       |       类型       |       默认值       |
|--------------- |----------------- | :---------------|:-----------------: |
| icon | 头部提示标题前的图标类名 | String |' '|
| iconStyle| 头部提示标题前的图标样式|object |{ }|
| title | 头部标题文字|String |提示|
|visible|弹窗的显隐|Boolean|false
|hasLine|头部和内容之间是否有分割线|Boolean|true
|footerShow|是否展示底部按钮|Boolean|true
|width|弹窗的宽度|String|640
|destroyOnClose|是否用v-if来控制弹窗的显隐|Boolean|false
|okCode|底部确定按钮的权限code|String|' '
|cancelCode|底部取消按钮的权限code|String|' '

## 事件

|       事件名称      |       说明       |      回调参数       |
|---------------------|-----------------|--------------------|
|cancel|点击取消按钮或关闭的回调|function(e)
|ok|点击确定按钮的回调|function(e)