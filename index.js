
const monthUser = prompt('month');
const month = Number(monthUser)
//
if(
    month<1 || 
    month>12 ||
    Number.isNumber(month) || 
    Number.isInteger(number) === false
  ) {
  console.log('wrong data')
} else if(month<=2 || month===12){
  console.log('wnter');
} else if(month <= 5){
  console.log('spring')
} else if(month === 6 || month === 7 || month === 8) {
    console.log('summer')
} else if (month>8) {
    console.log('autumn');
} else {
    console.log('error')
}



