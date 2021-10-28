const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("appendRight", function() {
  it("places the value at the top of the deque and returns undefined", function() {
    expect(deque.appendRight(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendRight(100);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(100);
    deque.appendRight(1000);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(1000);
  });
});
describe("appendLeft", function() {
    it("places the value at the start of the deque and returns undefined", function() {
      expect(deque.appendLeft(10)).toBe(undefined);
      expect(deque.first.val).toBe(10);
      expect(deque.last.val).toBe(10);
      deque.appendLeft(100);
      expect(deque.first.val).toBe(100);
      expect(deque.last.val).toBe(10);
      deque.appendLeft(1000);
      expect(deque.first.val).toBe(1000);
      expect(deque.last.val).toBe(10);
    });
  });

describe("pop", function() {
  it("returns the value of the node removed", function() {
    deque.appendRight(10);
    deque.appendRight(100);
    deque.appendRight(1000);
    var removed = deque.pop();
    expect(removed).toBe(1000);
    expect(deque.size).toBe(2);
    deque.pop();
    deque.pop();
    expect(deque.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.pop()).toThrow(Error);
  });
});

describe("peek", function() {
  it("returns the value at the start and end of the deque", function() {
    deque.appendRight(3);
    expect(deque.peek()).toEqual({first:3,last:3,length:1});
    deque.appendRight(5);
    expect(deque.peek()).toEqual({first:3,last:5,length:2});
  });
});

describe("isEmpty", function() {
  it("returns true for empty deques", function() {
    expect(deque.isEmpty()).toBe(true);
  });

  it("returns false for nonempty deques", function() {
    deque.appendRight(3);
    expect(deque.isEmpty()).toBe(false);
  });
});
