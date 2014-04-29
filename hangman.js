/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var words = ["potato", "toaster","bulldozer","demolition"];
    var count = 0;
    var madeGuesses = '';
    var guess = '';
    var wordChoice = Math.floor((Math.random() * 4));
    var display = '';
    var win = false;
    
    wordChoice = words[wordChoice];
    console.log(wordChoice);
	
	var wordLetters = new Array(wordChoice.length);
	for(var i = 0; i < wordChoice.length; i++){
		wordLetters[i] = wordChoice.substring(i, (i+1));
	}
	
	var wordDisplay = new Array(wordChoice.length);
    for(var i = 0; i < wordChoice.length; i++){
		wordDisplay[i] = '*';
	}
	
    $('#picture').html('<img src="0.png">');
    
    for(var i = 0; i < wordChoice.length; i++){
        display = display.concat('*');
    }
    console.log(display);
    $('#word').html(display);
    
    $('#guess').click(function(){
        //console.log('click');
        //console.log('clock');
        //count++;
        if(count === 10){
            alert("You lose! Refresh to play again!");
            return;
        }
        var guess = $('#letter').val();
        var go = isNaN(guess);
        var correct = false;
        console.log(guess);
        if(go){
            if(guess.length > 0 && guess.length < 2){
                if(isLetter(guess)){
                 	for(var i = 0; i < wordLetters.length; i++){
						if(guess === wordLetters[i]){
							wordDisplay[i] = wordLetters[i];
							correct = true;
						}
					}
					if(!correct){
						count++;
					}
					madeGuesses = madeGuesses.concat(guess);
                } else {
					alert("input is not a letter");
					return;
				}
            } else {
				alert("input too long.");
				return;
			}
        } else {
			alert("Invalid input");
			return;
		}
		
		display = '';
		for(var i = 0; i < wordDisplay.length; i++){
			display = display.concat(wordDisplay[i]);
		}
		$('#word').text(display);
		$('#guessed').text(madeGuesses);
		var countStr = count + "";
        var pichtml = "<img src ='";
        pichtml += countStr;
        pichtml += ".png'></img>";
        console.log(pichtml);
        $('#picture').html(pichtml);
    });
});

display.concat('<br>');
                        console.log(display);
                        $('#word').html(display);
                        
                    
function isLetter(str){
    return /[a-z]/i.test(str);
}

function alreadyGuessed(str){
    for(var i = 0; i < rightGuess.length; i++){
        if(rightGuess[i] === str){
            return true;
        }
    }
    
    for(var i = 0; i > wrongGuess.length; i++){
        if(wrongGuess[i] === str){
            return true;
        }
    }
    
    return false;
}

function addWrongGuess(str){
    for(var i = 0; i > wrongGuess.length; i++){
        if(wrongGuess[i] === ''){
            wrongGuess[i] = str;
            return;
        }
    }
}

function addRightGuess(str){
    for(var i = 0; i > rightGuess.length; i++){
        if(rightGuess[i] === ''){
            rightGuess[i] = str;
            return;
        }
    }
}


