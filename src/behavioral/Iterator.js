/*
 * @Description: 迭代器模式是指模块提供一种方法去顺序的访问一个集合对象中的各个元素，而又不需要暴露该对象的内部表示。
 * 迭代器模式也可以把迭代过程从业务逻辑中分离出来，使用迭代器模式后，即便不关心对象的内部构造，也可以按顺序访问其中的各个元素
 * 迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则
 * 同时迭代器分为两种： 内部迭代器 与外部迭代器
 *
 * - 内部迭代器
 *  内部迭代器在调用时非常方便，外界不会去关心其内部实现。在每次调用的时候，迭代器的规则其实就制定完毕，如果遇到一些不同样的迭代规则，
 *  此时的内部迭代器就不是很清晰
 *
 * - 外部迭代器
 *  外部迭代器会显式的请求迭代下一个元素（next方法），外部迭代器虽然增加了调用的复杂度，但是增强了，迭代器的灵活性，我们
 *  可以手动的控制迭代过程或者顺序。
 *
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-16 10:08:48
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-16 10:29:43
 */

// 迭代者类
class Iterator {
  constructor(creator) {
    this.list = creator.list;
    this.index = 0;
  }

  isDone() {
    if (this.index >= this.list.length) {
      return true;
    } else {
      return false;
    }
  }

  next() {
    return this.list[this.index++];
  }
}

// 创建者类
class Creator {
  constructor(list) {
    this.list = list;
  }

  createIterator() {
    return new Iterator(this);
  }
}

let arr = [1, 2, 3, 4];

let creator = new Creator(arr);
let iterator = creator.createIterator();
console.log(iterator.list);

while (!iterator.isDone()) {
  console.log(iterator.next);
}
