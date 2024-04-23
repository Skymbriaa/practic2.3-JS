

function getRandomInclusive(min = 0, max = 10) {
  return Math.floor(Math.random() * (max + 1 - min) + min); 
}

function catchErrorUserInputNumber(value) {
  return value==='' || value===null || number.isNaN(Number(value));
}

const randomNumber1 = getRandomInclusive();
const randomNumber2 = getRandomInclusive();
const rightResult = randomNumber1 * randomNumber2;
const strTask = 'calculate\n ${randomNumber1} * ${randomNumber2} =';

while(true){
  const userResult = prompt(strTask);
  if(isErrorUserInputNumber(userResult)){
    continue;
  }
  if(rightResult === Number(userResult)) {
    alert('win');
    break;
  }
}



