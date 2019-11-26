# 更新日志示例

## [6.2.4] - 2015-12-16

### 变更

* `Node.fn.map()` 之前返回 NodeList 自身，现在将正确地返回被 map 后的数组。

### 修复

* 修复在非 ks-debug 模式下仍然输出 `KISSY.log()` 控制台信息的问题。

### 修复

* 修复 `KISSY.getScript` 在传入了 `timeout` 参数后报错的问题。[#12]

### 新增

* node 模块增加 API `Node.fn`，以兼容传统 KIMI 的 node 对象扩展机制。 
* ua 模块现在可以识别 Microsoft Edge 浏览器。

### 优化

* `KISSY.getScript()` 从 loader 模块中独立出来，io 模块不再依赖 loader 模块。

### 已删除

* io 模块默认去掉了对 XML 的 converter 支持。
