
// const user = {
//   fname: 'Brad',
//   sname: 'Pitt'

// }

// console.log(user);

// user.age = 60;
// user.isAdult = true;

// console.log(user.age);


// const user2 = {
//   fname: 'Tom',
//   sname: 'Rot',
//   password: 'qwerty',
//   age: 59,
//   isAdult: true,
//   sayFirstName: function(){
//     return 'Hi, i\'m ' + user.fname;
//   },
//   saySecondName: function(){
//     return `Hi, i\'m  + ${user.sname}`;
//   }
// };
// console.log(user);

//
function User(fnameValue, sname, password, age, isAdult){
  this.fname = fnameValue;
  this.sname = sname;
  this.password = password;
  this.age = age;
  this.isAdult = isAdult;
  this.sayFullName = function () {
    return `${this.fname} ${this.ansme}`;
  };
  this.getBdYear = function () {
    //body function
    return 1963;
  };
  this.showSubscribe = function () {
    return 'you';
  }

}

const user2 = new User('Brad','Pitt','qwerty',60,true);
console.log(user2);
