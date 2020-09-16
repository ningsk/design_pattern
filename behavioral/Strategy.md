<!--
 * @Description: 策略模式
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-16 10:38:43
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-16 13:13:17
-->

# 策略模式

> 策略模式就是定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

策略模式的核心是讲算法的使用与算法的实现分离开。

一个策略模式的程序至少要包含两部分：

- 一组策略类，策略类封装了具体的算法，并且负责具体的计算过程
- 环境类，接收客户的请求，随后把请求委托给某一个策略类。要做到这点，说明环境类中要维持对某个策略对象的引用。
  一些例子：
- 诸葛亮的锦郎妙计，每一个锦囊就是一个策略
- 旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略
- 购物时的有满减、立减、返现等选项，每一个都是一个策略。

```javascript
class PromotionStrategy {
  doPromotion() {}
}

class FanXianPromotionStrategy extends PromotionStrategy {
  doPromotion() {
    console.log("返现促销，返回的金额存放到用户的余额中");
  }
}

class LiJianPromotionStrategy extends PromotionStrategy {
  doPromotion() {
    console.log("立减促销，课程的价格直接减去配置的价格");
  }
}

class ManJianPromotionStrategy extends PromotionStrategy {
  doPromotion() {
    console.log("满减促销，满 200-20 元");
  }
}

class PromotionActivity {
  constructor(promotionStrategy) {
    this.promotionStrategy = promotionStrategy;
  }

  executePromotionStrategy() {
    if (typeof this.promotionStrategy.doPromotion === "function") {
      this.promotionStrategy.doPromotion();
    }
  }
}

let promotionActivity618 = new PromotionActivity(new LiJianPromotionStrategy());
let promotionActivity1111 = new PromotionActivity(
  new FanXianPromotionStrategy()
);

promotionActivity618.executePromotionStrategy();
promotionActivity1111.executePromotionStrategy();
```

## 总结

- 优点：可以有效避免多重条件语句，将一系列的方法封装起来，更直观，利于维护
- 缺点：策略组往往比较多，我们需要事先定义好所以的情况。
