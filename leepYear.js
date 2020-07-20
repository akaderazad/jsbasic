//const year = 3565;
//let remainder = year % 4;

//if (remainder == 0) {
    //console.log('Your year is a Leep Year');
//} else {
    //console.log('Your year is not a Leep Year');
//}


function isLeepYear(year){
    const remainder = year % 4;
    if (remainder == 0){
        return true;
    } else {
        return false;
    }
}

const checkLeepYear = isLeepYear(3568);
console.log(checkLeepYear);


