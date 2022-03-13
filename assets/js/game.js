//set up fight function
var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
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
        window.alert(
          `${playerInfo.name} has decided to skip this fight. Goodbye!`
        );
        // subtract money from layerNaplayerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("player money", playerInfo.money);
        break;
      }
    }
    // player damage based on player attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(`
        ${playerInfo.name} attacked  ${enemy.name}.  ${enemy.name}  now has ${enemy.health}  health remaining.`);

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(`${enemy.name} has died!`);

      // award player money for winning
      playerInfo.money = Math.max(0, playerInfo.money + 20);
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(` ${enemy.name} still has ${enemy.health} health left.`);
    }
    // generate enemy damage
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      ` ${enemy.name} attacked  ${playerInfo.name}. ${playerInfo.name} now has  ${playerInfo.health} health remaining.`
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(`${playerInfo.name} has died`);
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(
        `${playerInfo.name} still has ${playerInfo.health} health left.`
      );
    }
  } // end of while loop
}; // end of fight function

//function to start a new game

var startGame = function () {
  //reset play stats
  playerInfo.reset();

  //call fight function
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      //call the shop

      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    alert(
      `Great job, you've survived the game! you now have a score of ${playerInfo.money}.`
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
      playerInfo.refillHealth();
      break;
    case "upgrade":
      playerInfo.upgradeAttack();
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

//function to generate a random value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};
// set up player name and stats
var playerInfo = {
  name: prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      alert("Upgrading player's attack by 6 for 7 dollars");

      this.health += 20;
      this.money -= 7;
    } else {
      alert("You dont have enough Money");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      alert("You dont have enough money!");
    }
  },
};

//set up opponent name and stats
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];
//start game on page load
startGame();
