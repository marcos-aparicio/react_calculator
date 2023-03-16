export default class Stack {
  constructor() {
    this.first = null;
    this.count = 0;
  }

  peek() {
    return this.first == null ? null : this.first.value;
  }

  size() {
    return this.first == null ? 0 : this.count;
  }

  push(element) {
    this.first =
      this.first === null
        ? new Node(element, null)
        : new Node(element, this.first);

    this.count++;
  }

  pop() {
    if (this.first === null) return null;

    this.count--;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
