# 跨源消息传递opBroker用法
跨域消息传递现已改为嵌入iframe并通过postMessage跨源跨窗口执行脚本的方式来实现

#### 阶段1：使用document.domain方式跨域传递消息

```js
// 跳转前的页面 a.example.com
document.domain='example.com';
let info={access_token:'a2457aec-86cd-4880-a85b-980afcdf8dcc'};
document.cookie='storage='+encodeURIComponent(JSON.stringify(info))+'; Path=/';

// 跳转后的（或新打开的）页面 b.example.com
document.domain='example.com';
console.log(document.cookie);

```



#### 阶段2：使用window.name方式跨源传递消息

```js
// 跳转前的页面
let info={access_token:'a2457aec-86cd-4880-a85b-980afcdf8dcc'};
let message=JSON.stringify(info);
window.name=message;
location.href="http://localhost:10006/";
// 或 window.open('http://localhost:10006/',message);

// 跳转后的（或新打开的）页面
import localStore from 'potato-utils';

let message=window.name;
localStore.set(null,message);
console.log(localStore.get('access_token'));

```



#### 阶段3：使用window.postMessage方式跨源传递消息（已封装为opBroker）

```js
// 跳转前的页面
import opBroker from 'potato-ui';

let info={access_token:'a2457aec-86cd-4880-a85b-980afcdf8dcc'};
let message=JSON.stringify(info);
opBroker.localStorage.setItem('message.to.a',message).then((channel)=>{
    location.href="http://localhost:10006/";
    // 或 import windowManager from 'potato-ui';
    // windowManager.openOrActivate('http://localhost:10006/', '_3D_modeling');
});

// 跳转后的（或新打开窗口的）页面
import opBroker from 'potato-ui';

opBroker.localStorage.getItem('message.to.a').then((channel)=>{
    let message=channel.data;
    localStore.set(null,message);
	console.log(localStore.get('access_token'));
});
// 若用在main.js用到potato-ui且调用了authHelper.initAppAuth();
// 则需在public/index.html指定 <meta itemprop="appCode" content="3D_modeling" />
// （将3D_modeling调整为数据库定义的当前应用的code）
// 而不必调再opBroker.localStorage.getItem()，即可直接用localStore.get('access_token')
// 注意：类似于CORS，opBrocker设置允许访问的源页面URL白名单。见http://localhost:10000/message-brocker.html

```

