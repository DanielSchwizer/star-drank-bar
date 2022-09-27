export class Cocktail {
  #id;
  #img;
  #name;
  constructor(id, img, name) {
    this.#id = id;
    this.#img = img;
    this.#name = name;
  }
  getId() {
    return this.#id;
  }
  setId(id) {
    this.id = id;
  }

  getImg() {
    return this.#img;
  }
  setImg(img) {
    this.#img = img;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}
