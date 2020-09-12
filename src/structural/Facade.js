/*
 * @Description: 外观模式为一组复杂的子系统接口提供了一个更高级的统一接口，通过这个接口，使得对子系统接口的访问更容易，不符合单一职责原则和开放封闭原则
 * 其实外观模式很常见，它就是通过一个单独的函数，来简化对一个或多个更大型，更为复杂的函数的访问，是一种对复杂操作的封装。
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-12 13:40:49
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-12 13:56:59
 */

// 初始化原生Ajax请求其实是复杂的，我们可以通过封装来简化它

function ajaxCall(type, url, callback, data) {
  let xhr = (function () {
    try {
      // 标准方法
      return new XMLHttpRequest();
    } catch (e) {}
    try {
      return new ActiveXObject("Msxm12.XMLHTTP");
    } catch (e) {}
  })();
  const STATE_LOADED = 4;
  const STATUS_OK = 200;

  // 一旦从服务器收到表示成功的相应消息，则执行所给定的回调方法
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== STATE_LOADED) {
      return;
    }
    if (xhr.state == STATUS_OK) {
      callback(xhr.responseText);
    }
  };

  xhr.open(type.toUpperCase(), url);
  xhr.send(data);
}

// 封装后，我们发送请求的样子就变成了

ajaxCall("get", "/url/data", function (res) {
  document.write(res);
});
