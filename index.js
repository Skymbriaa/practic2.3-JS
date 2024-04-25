
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
user1.__proto__ = userFunk;

const user2 = {
  fname: "Tom",
  sname: "Rot",
  age: 55,
  ___proto___: userFunk,
};


const user3 = {
  fname: "Anna",
  sname: "Qwerty",
  age: 54,
  
};