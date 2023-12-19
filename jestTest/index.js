
class Queue {
  constructor(){
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    let value = this.array.shift();
    return value;
  }

  hasEvenNumbers(){
    var evenElement = this.array.find(element => {
      return element%2 === 0;
    });
    if(evenElement)
      return true;
    return false;
    }

  removeEvenNumbers = () => {
    return this.array.filter(number => number % 2 !== 0);
  };
}

module.exports = Queue;