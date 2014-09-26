##Lacus
###简介
Lacus是动漫高达seed的女主角，是一套用less编写的适用于PC端的前端样式库，同时也是[百度爱玩](http://iwan.baidu.com)使用的CSS库。

![](http://bcs.duapp.com/webcdn/image/lacus.jpg?sign=MBO:cYNBSUK2FS1telkxKKYb6lGG:2QMXhYubebHVTriI1lxeFvcAfu4%3D&response-cache-control=private)

###目标
尝试打造一套编写完善，在IE渲染时不会被破坏（或只有一些小问题）的样式库，同时又保持CSS的高效性和可维护性。

**注：不完美支持ie6及更低版本**

###结构
#####基础框架
+ reset
+ function
+ font
+ layout
+ variable

#####通用样式
+ elements
    + box
    + button
    + checkbox
    + dropdown
    + image
    + icon
    + list
    + tip
    + te'x't'tip

+ collections
    + breadcrumb 
    + form
    + nav
    + pagination
    + tab
    + table

  

#####动画
+ CSS3 动画

#####解决技巧
+ 高度不固定的内容垂直居中


###构思
每个ui元素基本含有三个部分，分别是**Basic**，**Types**，**States**，**Variations**。

#####Basic
basic是ui元素的**“基础类”**。规定了元素的基本特征，消除了部分浏览器之间的差异。

#####Types
types是以**组合**的方式在各个基类上衍生开来的ui的具体表现形式。如label元素，types就可以分为``basic label``，``icon label``，``text link label``，``image label``等。types可以根据不同的业务需求和交互设计进行实现，同时types不保证对低版本的浏览器进行完美的兼容。

#####States
states是对ui元素比如颜色，是否禁用等进行变化。

#####Variations
variations是ui元素与各种其他基本特征结合起来。如invert，circular，attached，colored的功能，丰富ui的表现形式。

###依赖
Lacus的编写依赖于[est](http://ecomfe.github.io/est/)，est提供了一系列方便快捷的 mixin，只在调用时才输出代码。所以Lacus以它搭建样式类库，提供类名接口来进行快速开发.
