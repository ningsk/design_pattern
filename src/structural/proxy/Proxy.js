/*
 * @Description: 代理模式是为一个对象提供一个代用品或者占位符，以便控制对它的访问
 * 代理模式是哟中极为有趣的模式，生活中，我们可以找到很多代理模式的场景。 比如明星的经纪人，一般的商业活动不会直接跟明星接触，而是和经纪人谈，经纪人会把工作
 * 内容和报酬谈好之后交给明星
 *
 * FBI-WARNING
 * 1) 代理模式符合开放封闭原则
 * 2）代理模式会让代码易于维护
 * 3）本体对象一般和代理对象拥有同样的方法，所以使用者并不知道请求的是本体对象还是代理对象
 *
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-12 14:40:12
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-12 15:12:34
 */

// 当明星没有经纪人，自己买包的时候

// // 定义一个包类
// class Bags {
//   constructor(props) {
//     this.name = props;
//   }

//   getName() {
//     return this.name;
//   }
// }

// // 定义一个明星对象
// class Star {
//   buyBag(bag) {
//     console.log(`买到了一个${bag.getName()}包`);
//   }
// }

// // 创建一个明星实例
// let star = new Star();
// star.buyBag(new Bags("Coach")); // 买到了一个Coach包

// // 定义一个包类
// class Bags {
//   constructor(props) {
//     this.name = props;
//   }
//   getName() {
//     return this.name;
//   }
// }

// // 定义一个助理对象
// class Assistant {
//   constructor(props) {
//     this.star = props;
//   }
//   buyBag(bag) {
//     this.star.buyBag(bag);
//   }
// }

// // 定义一个明星对象
// class Star {
//   buyBag(bag) {
//     console.log(`买到了一个${bag.getName()}包`);
//   }
// }

// // 创建一个明星实例
// let star = new Star();
// let assistant = new Assistant(star);
// assistant.buyBag(new Bags('Coach')); //买到了一个Coach包

class ABigImage {
  constructor() {
    this.img = new Image();
    document.body.appendChild(this.img);
  }

  setSrc(src) {
    this.img.src = src;
  }
}

class ProxyImage {
  constructor() {
    this.proxyImage = new Image();
  }

  setSrc(src) {
    let bigImageObj = new ABigImage();
    bigImageObj.img.src = "./local.jpg"; // 地下清晰度url或本地图片
    this.proxyImage.src = src;
    this.proxyImage.onload = function () {
      bigImageObj.img.src = src;
    };
  }
}

var proxyImage = new ProxyImage();
proxyImage.setSrc("图片Url");
