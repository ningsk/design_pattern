# FactoryMethod

```javascript
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
    console.log("录制JavaScript课程视频");
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
```
