function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(26400);
console.log(result);







function woodCalculator(chair, table, bed){
    var woodCountForChair = chair * 1;
    var woodCountForTable = table * 3;
    var woodCountForBed = bed * 5;
    var totalWood = woodCountForChair + woodCountForTable + woodCountForBed;
    return totalWood;

}




function brickCalculator(tenth, twentieth, twentyUp){
    var brickCountForTenth = tenth * 15 * 1000;
    var brickCountForTwentieth = twentieth * 12 * 1000;
    var brickCountForTwentyUp = twentyUp * 10 * 1000;
    var totalBrick = brickCountForTenth + brickCountForTwentieth + brickCountForTwentyUp;
    return totalBrick;
}









function tinyFriend(names){
    var tiny = names[0];
    for (let  i = 0;  i < names.length;  i++) {
        const currentNames = names[ i];
        if (currentNames < tiny) {
            tiny = currentNames;

        }
        
    }
    return tiny;

}