// set up player name and stats
var playerName = prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//set up opponent name and stats
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//set up fight function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );
    promptFight = promptFight.toLowerCase();
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(`
        ${playerName} attacked  ${enemyName}.  ${enemyName}  now has ${enemyHealth}  health remaining.`);

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died!`);

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(` ${enemyName} still has ${enemyHealth} health left.`);
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      ` ${enemyName} attacked  ${playerName}. ${playerName} now has  ${playerHealth} health remaining.`
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(`${playerName} has died`);
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
  } // end of while loop
}; // end of fight function

//function to start a new game

var startGame = function () {
  //reset play stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  //call fight function
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      //call the shop

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm =
          "The fight is over. Visit the store before the next round?";
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      alert("You have lost your robot in battle! Game Over! ");
    }
  }
  //play again
  endGame();
};

//end game function
var endGame = function () {
  //if player is still alive player wins
  if (playerHealth > 0) {
    alert(
      `Great job, you've survived the game! you now have a score of ${playerMoney}.`
    );
  } else {
    alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

//shop
var shop = function () {
  var shopOptionPrompt = prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  shopOptionPrompt = shopOptionPrompt.toLowerCase();
  //switch statement to carry out shop actions
  switch (shopOptionPrompt) {
    case "refill":
      if (playerMoney >= 7) {
        alert("Refilling players health by 20 for 7 dollars");
        //increase health
        playerHealth += 20;
        playerMoney -= 7;
      } else {
        alert("You dont have enough money.");
      }
      break;
    case "upgrade":
      if (playerMoney >= 7) {
      alert("Upgrading players's attack by 6 for 7 dollars");
      playerAttack += 6;
      playerMoney -= 7;}
      else { alert("You dont have enough money.")

      }
      break;
    case "leave":
      alert("Leaving the store");
      break;
    default:
      alert("You didn't pick a valid option. Try again.");
      shop();
      break;
  }
};
//start game on page load
startGame();
