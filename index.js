//console.log('it works!')

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has a greater attack!')
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log('Jamie has the greater attack!')
} else {
    console.log('They have the same attack strength!')
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon has been slain!")
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon's health is now ${jonSnowHealth}`)
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon has been slain!")
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon's health is now ${jonSnowHealth}`)
}

//inner for loop example

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
       
        console.log(i,j)
    
    }
}