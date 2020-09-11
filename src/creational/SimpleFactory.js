/*
 * @Description: 简单工厂类
 * @version:
 * @Author: 宁四凯
 * @Date: 2020-09-11 13:23:52
 * @LastEditors: 宁四凯
 * @LastEditTime: 2020-09-11 13:51:16
 */
class Video {
  produce() {}
}

class JavaVideo {
  produce() {
    console.log("录制Java课程视频");
  }
}

class JavaScriptVideo {
  produce() {
    console.log("录制Javascript教程视频");
  }
}

const VideoType = {
  JavaVideo: 1,
  JavaScriptVideo: 2,
};

class VideoFactory {
  static getVideo(type) {
    switch (type) {
      case VideoType.JavaVideo:
        return new JavaVideo();
      case VideoType.JavaScriptVideo:
        return new JavaScriptVideo();
    }
  }
}

VideoFactory.getVideo(VideoType.JavaScriptVideo).produce();
VideoFactory.getVideo(VideoType.JavaVideo).produce();
