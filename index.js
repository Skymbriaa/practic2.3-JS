

//write 'thanks' if user wrote smth or write'error'

function welcomUser(){
    const keyWorld = prompt();
    return  keyWorld === null || keyWorld === '' ? 'error' :'thanks';
}


