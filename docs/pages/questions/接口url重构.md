# 接口url重构

已重构好（不完全）的实例见`src/api/OAuth.js`

以`src/api/resource.js`为例，要重构，请执行以下步骤：

#### 调整类

```js
import Base from './Base'; // 引入Base

class Resource extends Base { // 让类继承Base
    getResourceServiceList(params) {
		return http.get(this.getUrl('code1', this.baseUrl));// this.baseUrl即构造时传入的baseUrl
	}
    getResourceInterfaceDetail(id) {
		return http.get(this.getUrl(['code2',{id}], this.baseUrl + `/${id}`));
	}
}

export default Node; // 导出类，而不是类实例
```

#### 调整文件名

让文件名(base name)与类名保持一致

```sh
# 重命名resource.js为Resource.js
git mv resource.js Resource.js
```

#### 调整类的调用代码

在`src/api/index.js`

```js
// ...
import OAuth from './OAuth'; // 注意文件名大小写

// ...
const uaaOptions = {
	codeset,
	proxyPath: '/uaa',
};
// 对于实例化调用的第二个参数，若能共用则可提取为变量在多处使用
export const oauth = new OAuth('/v1/api/openauth', uaaOptions);
export const resource = new Resource('/v1/api/resource', uaaOptions);
export const am = new Am('/v1/api/resource', {
    codeset,
	proxyPath: '/am',
});
export const log = new Resource('/v1/api/openauth', {
    codeset,
	proxyPath: '/logger',
});
```

#### 调试

在`Base.js`

```js
Base.USE_DEFAULT_LABEL= false; // DEVONLY 不使用备用url（用于调试），调用getUrl时若首选url为空时则将方法返回`/no-such-code/${code}`
```

