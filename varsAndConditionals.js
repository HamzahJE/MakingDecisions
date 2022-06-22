/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25;
let jamieLannisterAttack =45;

if (jonSnowAttack > jamieLannisterAttack){
     console.log("Jon Snow has a better attach than Jamie")
}else if  (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamine has a better attack than Jon Snow")
}else {
    console.log("Equal Attack");
}


let jonSnowHealth= 100;
let jonSnowDefense=0;

if (jonSnowHealth <= jamieLannisterAttack ){
    console.log("Jon Snow has been slained");
}else {
    jonSnowHealth -=(jamieLannisterAttack-jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense +=25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon Snow has been slained");
}else {
    jonSnowHealth -=(jamieLannisterAttack-jonSnowDefense);
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if((jonSnowHealth+50)>=100){
    jonSnowHealth=100;
}else{
    jonSnowHealth+=50;
}
console.log(jonSnowHealth);

// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon's head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

let coinLandsHeads=false;

if (coinLandsHeads === true){
    console.log("the fight continues");
}else {
    console.log("jon is allowed to run away")
}

for(let i=0; i<5;i++){
    jonSnowHealth-=(jamieLannisterAttack-jonSnowDefense);    
    if(jonSnowHealth<=0){
        console.log("Jon has been slained");
    }else{
        console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    }
}

while(jonSnowHealth >0){
    jonSnowHealth-=jamieLannisterAttack-jonSnowDefense;
    console.log(`Jon Snow's Health is now ${jonSnowHealth}`);
    if (jonSnowHealth <=0){
        console.log("Jon has been slained");
    }
}
