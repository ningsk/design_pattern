/*
 * @Description: 工厂方法模式，让我们将创建实例的过程推迟到了子类中，这样我们的核心类就变成了抽象类，并且将构造函数和创建者分离，对new操作进行了封装
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-11 13:35:36
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-11 14:16:08
 */
class Video {
  produce() {}
}

class VideoFactory {
  getVideo() {}
}

class FEVideo {
  produce() {
    console.log("录制FE课程视频");
  }
}

class FEVideoFactory {
  getVideo() {
    return new FEVideo();
  }
}

class JavaVideo {
  produce() {
    console.log("录制Java课程视频");
  }
}

class JavaVideoFactory {
  getVideo() {
    return new JavaVideo();
  }
}

class JavaScriptVideo {
  produce() {
    console.log("录制Java课程视频");
  }
}

class JavaScriptVideoFactory {
  getVideo() {
    return new JavaScriptVideo();
  }
}

const VideoType = {
  FEVideo: 0,
  JavaVideo: 1,
  JavaScriptVideo: 2,
};

class FactoryMethod {
  static create(type) {
    switch (type) {
      case VideoType.FEVideo:
        return new FEVideoFactory();
      case VideoType.JavaVideo:
        return new JavaVideoFactory();
      case VideoType.JavaScriptVideo:
        return new JavaScriptVideoFactory();
    }
  }
}

let video = FactoryMethod.create(VideoType.FEVideo).getVideo();
let video1 = FactoryMethod.create(VideoType.JavaVideo).getVideo();
let video2 = FactoryMethod.create(VideoType.JavaScriptVideo).getVideo();

video.produce();
video2.produce();
video3.produce();
