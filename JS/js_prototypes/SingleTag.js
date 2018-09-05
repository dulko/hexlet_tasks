//Конструктор, который принимает на вход: name, attributes
//Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

// BEGIN (write your solution here)
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END
