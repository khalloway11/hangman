/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var words = ["potato", "toaster","bulldozer","demolition"];
    var count = 0;
    var wrongGuess = new Array(10);
    var guess = '';
    var wordChoice = Math.floor((Math.random() * 4));
    var display = '';
    var win = false;
    
    wordChoice = words[wordChoice];
    var rightGuess = new Array(wordChoice.length);
    console.log(wordChoice);
    
    //initGuesses();
    
    for(var i = 0; i < wordChoice.length; i++){
        display = display.concat('*');
    }
    //console.log(display);
    $('#word').text(display);
    
    $('#guess').click(function(){
        //console.log('click');
        //console.log('clock');
        //count++;
        var guess = $('#letter').val();
        var go = isNaN(guess);
        var correct = false;
        console.log(guess);
        if(go){
            if(guess.length > 0 && guess.length < 2){
                if(isLetter(guess)){
                    //var c = wordChoice.indexOf(guess);
                        for(var i = 0; i < wordChoice.length; i++){
                            if(wordChoice.charAt(i) === guess){
                                display = display.concat(wordChoice.charAt(i));
                                correct = true;
                                
                            } else{
                                display = display.concat('*');                     
                            }
                        }
                        if(!correct){
                            count++;
                        }
                        $('.word').empty();
                        $('#word').text(display);
                        var countStr = count + "";
                        var pichtml = "<img src ='";
                        pichtml += countStr;
                        pichtml += ".png'></img>";
                        console.log(pichtml);
                        $('#picture').html(pichtml);
                }
            }
        }
    });
});


                    
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


