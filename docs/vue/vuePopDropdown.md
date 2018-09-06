# 实现一个下拉列表组件


<vue-popDropdown />


1. 在update钩子中支持表达式的更新
2. 扩展clickoutside.js, 实现点击显示下拉菜单后，通过按下键盘中的ESC键也可以关闭下拉菜单
3. 将2中的ESC按键关闭功能作为可选项， 提示，可以用修饰符，比如v-clickoutside.esc;