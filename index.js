//adult or not adult

/**
 * 
 * @param {number} age
 * @return {string} 
 */
function isAdultUser(age){
    return age >= 18;
}


/**
 * 
 * @param {number} age
 * @return {string} 
 */
function getStatusAdultUser(age){
    // if (age >= 18) {
    //     return 'adult';
    // }
    // return 'not adult';
    return age >= 18 ? 'adult' : 'not adultd';
}