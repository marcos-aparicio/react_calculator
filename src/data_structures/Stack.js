export default class Stack {
  constructor() {
    this.first = null;
    this.count = 0;
  }

  deleteAll(){
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

    if(this.size() === 0) this.first = new Node(element,null);
    
    this.first = new Node(element,this.first);
    this.count++;
  }

  pop() {
    if (this.size() === 0 ) return null;
    
    let top = this.first.value;
    this.first = this.first.next;
    this.count--;
    return top;
  }

  toString(){
    let node = this.first;
    let string = "["
    while(node != null){
      string += `${node.value}, `
      node = node.next;
    }
    string += "]";

    return string;
  }

}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
