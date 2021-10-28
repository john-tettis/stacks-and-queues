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
  
    /** appendRight(val): add new value to end of the deque. Returns undefined. */
  
    appendRight(val) {
      let node= new Node(val);
      if(this.size===0){
        this.first = node;
        this.last=node;
      }
      else{
        this.last.next = node
        node.prev = this.last
        this.last = node;
      }
      this.size++
  
    }
    /** appendLeft(val): add new value to start of the deque. Returns undefined. */
  
    appendLeft(val) {
        let node= new Node(val);
        if(this.size===0){
          this.first = node;
          this.last=node;
        }
        else{
          this.first.prev= node
          node.next = this.first
          this.first = node;
        }
        this.size++
    
      }
  
    /** pop(): remove the node from the end of the deque
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
     /** shift(): remove the node from the front of the deque
     * and return its value. Should throw an error if the stack is empty. */
  
      shift() {
        if(this.length===0) throw new error("Cannot shift empty stack!")
        let {val} = this.first;
        this.first = this.first.next;
        if(this.first){
          this.first.prev=null;
        }
        this.size--
        return val
    
      }
  
    /** peek(): return the value of the first and last node in the deque. */
  
    peek() {
        if(this.size===0){return undefined}
      return {
          first:this.first.val,
          last:this.last.val,
          length:this.size
      }
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
  
    isEmpty() {
      return this.size===0 ? true:false;
  
    }
  }
  
  module.exports = Stack;
  