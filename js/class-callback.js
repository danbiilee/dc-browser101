class Counter {
  constructor(callback) {
    this.counter = 0;
    this.callback = callback;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback();
    }
  }
}

function print() {
  console.log("print");
}
function alert() {
  console.log("alert");
}

const printCounter = new Counter(print);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

const alertCounter = new Counter(alert);
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
