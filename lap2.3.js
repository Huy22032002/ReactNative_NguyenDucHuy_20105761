const calcAverage = (a,b,c) =>{
    return (a+b+c)/3;
}

console.log(calcAverage(1,1,1));
console.log(calcAverage(65,54,49));
calcAverage(1,1,1);
calcAverage(65,54,49);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        console.log("Dolphins win (" + avgDolphins +" vs. " + avgKoalas);
    }
    else if(avgKoalas >= 2*avgDolphins){
        console.log("Koalas win (" + avgKoalas +" vs. " + avgDolphins);
    }
    else{
        console.log("No team win!");
        
    }
}
checkWinner(calcAverage(1,1,1),calcAverage(65,54,49) );
