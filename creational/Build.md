# Build

```javascript
class BookBuilder {
  constructor() {
    this.name = "";
    this.author = "";
    this.price = "";
    this.category = "";
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withAuthor(author) {
    this.author = author;
    return this;
  }

  withPrice(price) {
    this.price = price;
    return this;
  }

  withCategory(category) {
    this.category = category;
    return this;
  }

  build() {
    return {
      name: this.name,
      author: this.author,
      prices: this.price,
      category: this.category,
    };
  }
}

// 调用建造者模式
const book = new BookBuilder()
  .withName("高效能人士的七个习惯")
  .withAuthor("史蒂芬·柯维")
  .withPrice(51)
  .withCategory("励志")
  .build();
```
