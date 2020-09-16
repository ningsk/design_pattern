<!--
 * @Description: 桥接模式
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-16 13:29:21
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-16 16:16:45
-->

# 桥接模式

> 桥接适用于抽象化与实现化解耦，使得两者可以独立变化。这种类型的设计模式属于结构型模式，它通过提供抽象化与实现化之间的桥接结构，来实现二者的解耦

在封装开源库的组件的时候，经常会用到这种设计模式

例如，对外提供暴露一个 complete 函数  
如果用户有传入此参数，那么及聚会在某一段代码逻辑中调用  
这个过程中，组件起到了`桥`的作用，而具体实现是用户自定义。

Javascript 中桥接模式的典型应用是：Array 对象上的 forEach 函数  
此函数符合循环遍历数组每个元素，是抽象部分；而回调函数 callback 就是具体实现部分

## 1、最简单模拟 forEach 方法

```javascript
let forEach = (arr, callback) => {
  if (
    Object.prototype.toString.call(callback) != "[object Function]" ||
    !Array.isArray(arr)
  ) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

let arr = [1, 2, 3];
forEach(arr, (v, i) => {
  arr[i] *= 2;
});
```

## 2、桥接模式在事件监听中的应用

```javascript
function getBeerById(id, callback) {
  asyncRequest("GET", "beer.url?id=" + id, function (resp) {
    callback(resp.responseText);
  });
}
elem.addEventListener("click", getBeerByIdBridge, false);
// 创建一座桥，就可以获取当前上下文对象this
function getBeerByIdBridge(e) {
  console.log(this); // 当前点击的node节点
  getBeerById(this.id, function (beer) {
    console.log("Requested Beer:" + beer);
  });
}
```

> 如果直接传入 getBeerById 方法，也可以实现，但是 getBeerById 依赖上下文对象，不然无法获取对应的 id，所以设计了一个 getBeerByIdBridge 桥来间接调用，同时在桥里面，调用对应的方法，将点击事件和实现部分解耦，而且 getBeerByIdBridge，也可以单独调用

## 3、桥接模式用于组件开发

桥接模式的一个适用场景是组件开发。我们平时开发组件为了适应不同场合，组件相应的会有许多不同维度的变化。桥接模式就可以应用于此，将其抽象与实现分离，使组件的扩展性更高。  
假如我们要开发一个弹窗插件，弹窗有不同的类型：普通消息提醒，错误提醒，每一种提醒的展示方式还都不一样。这是一个典型的多维度变化的场景。首先我们定义两个类：普通消息弹窗和错误消息弹窗

```javascript
class MessageDialog {
  constructor(animation) {
    this.animation = animation;
  }

  show() {
    this.animation.show();
  }
}

class ErrorDialog {
  constructor(animation) {
    this.animation = animation;
  }
  show() {
    this.animation.show();
  }
}

// 这两个类就是前面提到的抽象部分，也就是扩充抽象类，它们都包含一个成员animation
// 两种弹窗通过show方法进行展示，但是显示的动画效果不同，我们定义两种显示的效果类如下：

class LinearAnimation {
  show() {
    console.log("it is liner");
  }
}

class EaseAnimation {
  show() {
    console.log("it is ease");
  }
}

// 这两个类就是具体实现类，它们实现具体的显示效果，那我们如何调用呢？
let message = new MessageDialog(new LinearAnimation());
message.show();
let error = new ErrorDialog(new EaseAnimation());
error.show();
// 如果我们要增加一种动画效果，可以再定义一种效果类，传入即可
```

## 总结

学习桥接模式关键是要理解抽象部分与实现部分的分离，使得二者可以独立的变化，而不必拘泥于形式。JS 插件灵活的变化，适用场景的多变就非常适合使用这种模式来实现。使用桥接模式最重要的是要找出系统中不同的变化维度。

- 优点：
  把抽象与实现隔离开，有助于独立地管理软件的各组成部分。
- 缺点：
  每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响。提高了系统的复杂程度。如果一个桥接函数被用于连接两个函数，而其中某个函数根本不会在桥接函数之外被调用，那么此时这个桥接函数就不是非要不可的。
