
const VALID_PASSWORD = 'qwerty'

while (true) {
  const userInputPassword = promt('Enter password');
  if(userInputPassword === VALID_PASSWORD) {
    console.log('welcome');
    break;
  }
}

console.log(userInputPassword);
