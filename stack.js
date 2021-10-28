/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev=null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node= new Node(val);
    if(this.size===0){
      this.first = node;
      this.last=node;
    }
    else{
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.size++

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.length===0) throw new error("Cannot pop empty stack!")
    let {val} = this.last;
    this.last = this.last.prev;
    if(this.last){
      this.last.next=null;
    }
    this.size--
    return val

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.last.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size===0 ? true:false;

  }
}

module.exports = Stack;
