/*
 * @Description: 原型链模式
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-12 08:49:03
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-12 09:08:56
 */
var prototype = {
  name: "Reaper",
  hobby: {
    love: "123",
  },
  getName: function () {
    return this.name;
  },
};

var obj = Object.create(prototype, {
  skill: {
    value: "FE",
  },
});

console.log(obj.getName); // Reaper
console.log(obj.skill);
console.log(obj.__proto__ == prototype); // true

let proto = {
  a: 1,
};

let propertiesObject = {
  b: {
    value: 2,
  },
};

let obj = Object.create(proto, propertiesObject);

console.log(obj.__proto__ === proto); // true

// 方法继承
let proto = function () {};

proto.prototype.execute = function () {};
let child = function () {};

// 所有函数默认继承Object
let Foo = function () {};

console.log(Foo.prototype.__proto__ === Object.prototype); // true
// isPrototypeOf

// prototypeObj 是否在obj的原型链上
prototypeObj.isPrototypeOf(obj);
