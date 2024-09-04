var markMass=78;
var markHeigh=1.69;
var johnMass=92;
var johnHeight=1.76;

var markBMI=markMass / (markHeigh * markHeigh);
var johnBMI=johnMass / (johnHeight * johnHeight);

// var markHigherBMI=false;
/*
Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */
if (markBMI>johnBMI){
    console.log("Mark's BMI("+markBMI.toFixed(2)+") is higher than John's("+johnBMI.toFixed(2)+")");
}else {
    console.log("John's BMI("+johnBMI.toFixed(2)+") is higher than Mark's("+markBMI.toFixed(2)+")");
}
