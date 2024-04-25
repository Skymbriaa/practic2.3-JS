
const userFunk = {
  getFullName: function(){
    return `${this.fname} ${this.sname}`;
  },
  getInfo: function () {
    return `${this.fname}, years old ${this.sname}`;
  },
}


const user1 = {
  fname: "Brad",
  sname: "Pitt",
  age: 56,
  
};
// user1.__proto__ = userFunk;

function User(fname, sname, age){
  this.fname = fname;
  this.sname = sname;
  this.age = age;
}

function UserPrototype() {
  this.getFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
  this.getInfo = function () {
    return `${this.sname}, years old ${this.age}`;
  };
}

