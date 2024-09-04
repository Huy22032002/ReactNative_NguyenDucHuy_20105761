var dolphinsScore=[97,112,101];
var koalasScore=[109,95,106];
var dolphinsTotal=0;
var koalasTotal=0;

dolphinsScore.forEach(function(element){
    dolphinsTotal+=element;
})
koalasScore.forEach(function(element){
    koalasTotal+=element;
})
//1. Calculate the average score for each team, using the test data below
var dolphinsAverage=dolphinsTotal/(dolphinsScore.length);
var koalasAverage=koalasTotal/(koalasScore.length);
console.log("Dolphins Average: "+dolphinsAverage.toFixed(2));
console.log("Koalas Average: "+koalasAverage.toFixed(2));


console.log("Task2:")
if(koalasAverage>dolphinsAverage){
    console.log("Team Koalas Win");
}else if(koalasAverage<dolphinsAverage){
    console.log("Team Dolphins Win");
}else{
    console.log("Draw");
}

/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/
console.log("\nTask Bonus:");
if(koalasAverage>dolphinsAverage) {
    for (var i = 0; i < dolphinsAverage; i++) {
        if (koalasScore.at(i) > dolphinsScore.at(i) && koalasScore.at(i) >= 100) {
            console.log("Team Koalas Win!");
            break;
        }
    }
}
if(koalasAverage<dolphinsAverage) {
    for(var i=0;i<dolphinsAverage;i++){
        if(koalasScore.at(i)<dolphinsScore.at(i)&&dolphinsScore.at(i)>=100){
            console.log("Team Dolphins Win!");
            break;
        }
    }
}
if (koalasAverage=dolphinsAverage) {
    for(var i=0;i<dolphinsAverage;i++){
        if(dolphinsScore.at(i)>=100&&koalasScore.at(i)>=100){
            console.log("Draw!");
            break;
        }
    }
}