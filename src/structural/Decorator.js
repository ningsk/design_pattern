/*
 * @Description: 装饰器模式（Decorator Pattern）是在不改变对象自身的基础上，在程序运行期间给对象动态的添加方法
 * 装饰者模式非常贴合Javascript动态语言的特性，因为我们可以轻易的改变某个对象，但同时因为函数是一等公民，所以，我们
 * 会避免直接改写某个函数，来保护代码的可维护性和可扩展性。
 * 应用实例：
 * 1）孙悟空有72变，当他变成“庙宇”之后，他的根本还是一只猴子，但是他又有了庙宇的功能。
 * 2）我们拍照后添加的`滤镜`，不同的滤镜给照片赋予了不同的意境，这就是装饰者模式，通过滤镜装饰了图片，而并没有修改照片本身就给其添加了功能。
 *
 * FBI-WARNING
 * 1）装饰者一般用来实现AOP（面向切面编程），利用AOP可以对业务逻辑的各个部分进行隔离，也可以隔离与业务无关的功能，比如日志上传，异常处理等等，从而使得
 * 业务逻辑各部分之间的耦合度降低，提高业务无关的功能的服用性，也就提高了开发效率。
 * 2）装饰者模式与代理模式类似，但代理模式的意图是不直接访问实体，而为实体提供一个替代者，使体内定义了关键功能
 * 而代理提供或拒绝对实体的访问，或者一些其他额外的事情。而装饰者模式的作用就是为对象动态的加入行为。
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-14 14:48:41
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-14 15:55:14
 */

// 本质是使用了 Object.defineProperty 方法
function decorateSword(target, key, descriptor) {
  // 首先获取到 init 方法
  const initMethod = descriptor.value;
  // 宝剑添加攻击力 100 点
  let moreAtk = 100;
  let returnObj;
  descriptor.value = (...args) => {
    args[0] += moreAtk;
    returnObj = initMethod.apply(target, args);
    return returnObj;
  };
}

function decorateArmour(target, key, descriptor) {
  // 首先获取到 init 方法
  const initMethod = descriptor.value;
  // 护甲添加防御力 100 点
  let moreDef = 100;
  let returnObj;
  descriptor.value = (...args) => {
    args[1] += moreDef;
    returnObj = initMethod.apply(target, args);
    return returnObj;
  };
}

class MonkeySun {
  constructor(atk = 50, def = 50, hp = 100, mp = 100) {
    this.init(atk, def, hp, mp);
  }
  //示例需要 babel 支持修饰器模式
  @decorateSword
  @decorateArmour
  init(atk, def, hp, mp) {
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.mp = mp;
  }

  toString() {
    return `攻击力:${this.atk}, 防御力: ${this.def}, 血量: ${this.hp}, 法力值: ${this.mp}`;
  }
}

const sun = new MonkeySun();
console.log(`孙悟空状态 => ${sun}`);
