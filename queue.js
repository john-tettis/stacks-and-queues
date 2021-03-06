/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(data) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val)
    if(this.first===null){
      this.first = node;
      this.last = node
    }
    else{
      let temp = this.last;
      this.last = node;
      temp.next = node;
    }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size===0)throw new Error('Cannot dequeue from empty queue')
    let {val} = this.first;
    this.first = this.first.next;
    this.size--;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.length===0) return undefined;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size===0 ? true:false;

  }
}

module.exports = Queue;
