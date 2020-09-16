/*
 * @Description: 适配器模式
 * 适配器模式主要是用来解决两个已有接口之间不匹配的问题，它不考虑这些接口是怎么实现的，也不考虑他们将来会如何演化。
 * 适配器模式，不需要改变当前已有的接口，就能让他们协同作用
 * 适配器的别名，也叫包装器（wrapper），这是一个并不复杂的模式，在日常开发中有许多这样的场景：例如我们试图调用某个模块或者某个对象的
 * 接口时，却发现这个歌接口的格式并不符合目前的需求，这时就有两种解决方法，第一种使我们直接修改原有的接口实现，但如果原来的模块或者对象
 * 复杂，亦或是我们拿到的已经是已经压缩的代码，那么去修改原接口就显得不现实了。第二种方法就是我们讲到的适配器，将愿接口转换成你希望拿到的接口，
 * 而你只需要通过适配器即可得到，并不需要去修改原模块或对象
 *
 * FBI-WARING
 *
 * 1）我们要意识到适配器模式只是一种补救措施，它用来解决的是一些古老不可维护，或者已经在稳定版本的两个接口不兼容问题，
 * 而在开发初期应该减少或者不使用这种模式，而是要规划好接口的一致性。
 * 2）适配器不会改变原有接口，而是一个对象对另一个对象的封装。
 *
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-12 13:58:52
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-12 14:24:09
 */
class HuaweiChina {
  charge() {
    console.log("华为国行版本正在以5A的电流充电");
  }
}

class HuaweiUSA {
  charge1A() {
    console.log("华为美行版本正在以1A的的电流充电");
  }
}

// 定义一个适配器类，来实现对华为美行版本的转接

class TypeUSAToChina {
  charge() {
    let huawei = new HuaweiUSA();
    return huawei.charge1A();
  }
}

// 电源充电
function PowerToCharge(laptop) {
  if (laptop.charge instanceof Function) {
    laptop.charge();
  }
}

PowerToCharge(new HuaweiChina()); // 华为国行版本开始充电
PowerToCharge(new TypeUSAToChina()); // 华为美行版本开始充电
