目前组件FySelect的@change事件参数回传规则较多，容易冲突，为简化调用，我做了一些调整：

```html
<fy-select optionName="name,id" optionValue="id" ...>
	<a-select-option :value="-1">所有用户<span hidden>|-1</span></a-select-option>
</fy-select>
```

设option对应的每条数据为`record`：那么应遵循

1. `aSelectOption.textContent`由`fySelect.optionName`驱动，对于通过slot传入的option也适用。

   **特殊地，**若不想显示"|-1"，请将其替换为`<span hidden>|-1</span>`以隐藏。

2. 保证`aSelectOption.value = record[fySelect.optionValue]`

3. @change事件处理函数可接收两个参数，如`(selectedValue,selectedRecord)=> {}`

   `selectedValue`为选中option的value

   `selectedRecord`为选中option对应的对象

   **特殊地，**当选中静态option（通过slot传入的）时， @change的第二个参数将会自动生成，
   即通过textContent（如"所有用户|-1"）和optionName（如"name,id"）自动生成`{name:"所有用户",id:"-1"}`（值全为字符串类型）

**注：**为让静态option的value类型与动态option的保持一致，建议使用`:value="0"`而不是`value="0"`

