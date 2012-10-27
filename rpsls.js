var prompt = require("prompt");
var d = Array(54).join("-");
var userWeapon,userTempName,userTempPower,computerWeapon,computerTempName,computerTempPower;
var rounds,userwins =0,computerwins = 0,ties = 0;
var roundsCompleted = 0;
var options = new Array();
var userround = {
    properties: {
      round: {
		description: 'How many rounds would you like to fight',
        pattern: /^[1-9][0-9]*$/,
        message: 'Only Numbers allowed',
        required: true
      }
    }
  };
var userselection = {
    properties: {
      weapon: {
		description: 'Select you weapon [1 - 5]',
        pattern: /[1-5]\d*/,
        message: 'Only Numbers and you can select any 1 from 5 weapons',
        required: true
      }
    }
  };
prompt.start();
//Main Screen
console.log(d);
console.log("|    Welcome to ROCK-PAPER-SCISSORS-LIZARD-SPOCK    |");
levelscreen();

function levelscreen(){
	console.log(d);
	prompt.get(userround,function(err,result){
		rounds = result.round;
		weaponscreen();
	});
}

function weaponscreen(){
	console.log(d);
	console.log("|                 Select you weapon                 |");
	console.log("|                                                   |");
	console.log("| [1] - Rock                                        |");
	console.log("| [2] - Paper                                       |");
	console.log("| [3] - Scissors                                    |");
	console.log("| [4] - Lizard                                      |");
	console.log("| [5] - Spock                                       |");
	console.log("|                                                   |");
	console.log(d);
	//User selection
	prompt.get(userselection,function(err,result){
		userWeapon = result.weapon;
		done();
	});
}

function done(){
	var selection = getoptions(userWeapon);
	userTempName = selection.name;
	userTempPower = selection.power;
	var ai = runai();
	var c_selection = getoptions(ai);
	computerTempName = c_selection.name;
	computerTempPower = c_selection.power;
	roundsCompleted = roundsCompleted + 1;
	ingame();
	var winner = (computerTempPower - userTempPower) % 5;
	screenmapper(" ");
	if(winner == 1 || winner == 2){
		screenmapper("Computer Wins !");
		computerwins = computerwins + 1;
	}else if(winner == 0){
		screenmapper("It's a TIE !");
		ties = ties + 1;
	}else{
		screenmapper("You Win !");
		userwins = userwins + 1;
	}
	screenmapper(" ");
	console.log(d);
	gameover();
}

//
function getoptions(id){
	options[1] = {name:'Rock',power:'0'};
	options[2] = {name:'Paper',power:'2'};
	options[3] = {name:'Scissors',power:'4'};
	options[4] = {name:'Lizard',power:'3'};
	options[5] = {name:'Spock',power:'1'};
	return options[id];
}

function runai(){
	return Math.floor((Math.random()*5)+1);
}

function ingame(){
	console.log(d);
	screenmapper("Round "+roundsCompleted);
	screenmapper(" ");
	screenmapper(userTempName+" vs "+computerTempName);
	screenmapper(" ");
	console.log(d);
}

function screenmapper(thestring){
	var stringlen = thestring.length;
	var def = 52;
	var leftOut = def - stringlen;
	var min_size = Math.round(leftOut/2);
	var r = Array(min_size).join(" ");
	console.log('|'+r+thestring+r+'|');
}

function gameover(){
	if(rounds != roundsCompleted){
		weaponscreen();
	}else{
		exitprompt();
	}
}

function exitprompt(){
	console.log('');
	console.log(d);
	screenmapper(" ");
	screenmapper("GAME OVER");
	screenmapper(" ");
	console.log(d);
	screenmapper(" ");
	screenmapper("User Score: "+userwins+" Computer Score: "+computerwins);
	screenmapper(" ");
	console.log(d);
}
