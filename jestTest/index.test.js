
let Queue = require('./index');
let queue;

describe('queue test', () => {

  beforeEach(() =>{
    queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(9);
    queue.enqueue(7);
    queue.enqueue(12);
    queue.enqueue(15);
    queue.enqueue(64);
    queue.enqueue(711);
  });

  afterEach(() => {
  //stuff and things
  });

  test('should "dequeue" items in a FIFO (first in first out) order', () => {
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(9);
  });

  test('should be able to determine if any values contained in queue are even', () => {
    expect(queue.hasEvenNumbers()).toBe(true);
  });

  test('removeEvenNumbers function that returns an array with all even numbers removed', () => {
    let oddNumbers = queue.removeEvenNumbers();
    expect(oddNumbers).toEqual([9,7,15,711]);
  });
});
