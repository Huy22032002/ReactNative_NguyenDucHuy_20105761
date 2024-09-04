var markMass=78;
var markHeigh=1.69;
var johnMass=92;
var johnHeight=1.76;

var markBMI=markMass / (markHeigh * markHeigh);
var johnBMI=johnMass / (johnHeight * johnHeight);
/*
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
 */
var markHigherBMI=false;

if (markBMI>johnBMI){
    markHigherBMI=true;
}
console.log("Mark's BMI Higher Than John's: "+markHigherBMI);

