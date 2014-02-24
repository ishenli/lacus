##Lacus
###简介
Lacus是动漫高达seed的女主角，是一套用less编写的适用于PC端的前端样式库。

![image](http://bcs.duapp.com/webcdn/image/lacus.jpg?sign=MBO:cYNBSUK2FS1telkxKKYb6lGG:2QMXhYubebHVTriI1lxeFvcAfu4%3D&response-cache-control=private)

###目标
尝试打造一套编写完善，在IE渲染时不会被破坏（或只有一些小问题）的样式类库，同时又保持CSS的高效性和可维护性。

###结构
#####基础框架
+ reset
+ function
+ font

#####通用样式
+ box
+ list
+ icon
+ button
+ tip

#####Bug兼容
+ IE6 3像素bug
+ IE6 浮动双边距离

#####动画
+ CSS3 动画

#####技巧


###依赖
Lacus的编写依赖于[est](http://ecomfe.github.io/est/)，est提供了一系列方便快捷的 mixin，只在调用时才输出代码。所以Lacus以它搭建样式类库，提供类名接口来进行快速开发.


