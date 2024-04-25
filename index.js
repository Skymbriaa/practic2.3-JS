
const arrNums = [];
arrNums.push(7);
arrNums.push(77);
arrNums.push(777);
console.log(arrNums);
const arrNums2 = [];
console.log(arrNums.push === arrNums2.push);

console.log(arrNums);




function MyArray() {
  this.length = 0;

  this.push = function (value) {
    this[this.length] = value;
    this.length++;
  }
}

const myArrNums = new MyArray();

myArrNums.push(2);
myArrNums.push(3);
myArrNums.push(4);

console.log(myArrNums);

