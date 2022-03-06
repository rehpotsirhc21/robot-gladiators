// set up player name and stats
var playerName = prompt("What is your robots name?"); 
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10;

//set up opponent name and stats
var enemyName = "Roborto"; 
var enemyHealth = 50; 
var enemyAttack = 12; 

//set up fight function
var fight = function() {
    //let player know we are starting
    alert ("Welcome to Robot Gladiators!");

    //confirm player action
    var promptFight = prompt('would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');

   
    promptFight = promptFight.toLowerCase();
//if player chooses to fight
   if (promptFight === 'fight') {
    
    //subtract the value of player attack from the value enemy health
    enemyHealth -= playerAttack

    //log a resulting message
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.` );

    //check health
    if (enemyHealth <= 0) {
        alert (`${enemyName} has died.`);
    }
    else {
        alert(`${enemyName} still has ${enemyHealth} health left`);
    }

    //subtract the enemy attack from player health
    playerHealth -= enemyAttack;
    //log result
    console.log (`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining. `);
    // check health
    if (playerHealth <=0){
        alert (`${playerName} has died.`);
    }
    else {
        alert (`${playerName} still has ${playerHealth} health remaining.`)
    }
  


} 
//if player chooses to skip
else if (promptFight==='skip') {
    //confirm skip
    var confirmSkip = confirm("Are you sure you'd like to quit? Choose cancel for No.");
    
    //If yes
    if (confirmSkip) {

         playerMoney -= 2;
        alert (`${playerName} has chosen to skip the fight. You now have ${playerMoney} in player money left.`) }

         else {
            fight();}
        }
else {
    alert ('You didnt choose a valid option, try again.');
} } ;
    
    


//call fight function
fight()

