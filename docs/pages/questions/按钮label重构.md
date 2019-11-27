# 按钮label

### label控制

要让按钮/链接使用后台返回的label，把

```html
<a>新建</a>
<input type="button" value="新建" />
```

改为

```html
<a>{{$msg('add_xxx','新建')}}</a>
<input type="button" :value="$msg('add_xxx','新建')" />
```



#### 开关按钮的label控制
设服务端返回的用户授权集合含有

```json
{code: "enable_open_authorization_button", label: "启用,禁用", url: "/v1/api/openauth"}
```

```html
<!--方式1-->
<span v-potato-if="enable_open_authorization_button">
    <a v-if="record.disabled" @click="enableXxx(record)">
        {{$msg(['enable_open_authorization_button',0],'启用')}}
    </a>
    <a v-else @click="enableXxx(record)">
        {{$msg(['disable_open_authorization_button',1],'禁用')}}
    </a>
</span>

<!--方式2-->
<a @click="toggleXxx(record)" v-potato-if="enable_open_authorization_button">
    {{record.disabled?$msg(['enable_open_authorization_button',0],'启用'):
    	$msg(['enable_open_authorization_button',1],'禁用')}}
</a>
```

### 调试

在 main.js

```js
authHelper.initAppAuth(Vue, ()=> {
    Vue.prototype.$msg.USE_DEFAULT_LABEL = false; // DEVONLY 不显示备用label（用于调试）
	new Vue({
		router,
		store,
		render: (h)=> h(App),
	}).$mount('#app');
});

```



