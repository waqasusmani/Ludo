
//Global variables
var player=1;
//Starting position for player1 and player2
var p1pos=0;
var p2pos=0;

//Default dice number
var number=0;

//Board buttons (1-100)
var button;
// Set this to the desired number of steps on the board
var buttonsWanted = 100;

// Gameboard maker
document.addEventListener("DOMContentLoaded", function() { 
    
    //Creating fragment for placing the board buttons
    var docFrag = document.createDocumentFragment();
    // Creating a loop for placing the required number of buttons on the fragment
    for(var x = 1; x <= buttonsWanted; x++){
        //   var name="rameez"; (not used here, however sample for string use case)
        // Creating an input button
        button = document.createElement('input');
        // defining type of input as button
        button.setAttribute('type', 'button');
        button.setAttribute('value', x);
        button.setAttribute('name', x);
        button.setAttribute('id', 'boardbutton');
        // setting onclick event attribute(used in HTML), recordposition (function defined below) will record the position of name 'x' i.e., the number of each button
        button.setAttribute('onclick', 'recordposition('+x+')');
        // button.setAttribute('onclick', 'alert(\''+name+'\')'); (not used here, however sample for string use case)
        //For styling even number
        if (x%2==0) {
            button.style.backgroundColor="#ACD1EE";
        }
        //for styling odd number
        if (x%2!=0) {
            button.style.backgroundColor="#F0DD7B";
        }
        //Defining style of each button
        button.style.height="50px";
        button.style.width="50px";
        //inserting the buttons on the fragmented space
        docFrag.appendChild(button);
    }
    //placing the fragment on div having id container
    document.getElementById('container').appendChild(docFrag);
});

    
// Record position on piece movement
function recordposition(val) {
    console.log(val);
// If a player moves without dice roll
    if (number==0) {
        alert("Throw dice");
    }
// if player1 makes a valid move
    else if (player==1 && (val-p1pos)==number) {
        // Revert color of previous position to original board color (for even & odd)
        if (p1pos>0){
            document.getElementsByName(p1pos)[0].style.color="black";
            if (p1pos%2==0) {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#F0DD7B";
            }
        }
        // updating p1 position to val (button click value)
        p1pos=val;
        //change color/background of new position
        document.getElementsByName(val)[0].style.color="green";
        document.getElementsByName(val)[0].style.backgroundColor="pink";
        //changing number again to zero after move
        number=0;
        // kicking the opponent to zero
        if (p1pos==p2pos) {
            p2pos=0;
            alert("Player 2 piece beaten by Player 1\nPlayer 2 to start from position zero.")
        }
         
        //condition for reaching 100 (win for player1)
        if (p1pos==buttonsWanted) {
            alert("Player 1 wins!")
            // Resetting game board colors and player positions
            if (p1pos%2==0) {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#F0DD7B";
            }
            if (p2pos%2==0) {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#F0DD7B";
            }
            p1pos=0;
            p2pos=0;
            document.getElementById("playingplayer").innerHTML=`Player ${player} has won `;
            document.getElementById("numberthrown").innerHTML="";
            player=1;
            
        }
        else {
            //Changing the turn to player2 if player1 has not won the game
            player=2;
        }
        document.getElementById('player').innerHTML=player;
    }
    // if player1 makes a valid move

    else if (player==2 && (val-p2pos)==number) {
        if (p2pos>0) {
            document.getElementsByName(p2pos)[0].style.color="black";
            if (p2pos%2==0) {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#F0DD7B";
            }
        }
        p2pos=val;
        document.getElementsByName(val)[0].style.color="green";
        document.getElementsByName(val)[0].style.backgroundColor="yellow";
        number=0;
        if (p2pos==p1pos) {
            p1pos=0;
            alert("Player 1 piece beaten by Player 2\nPlayer 1 to start from position zero.")
        }
        if (p2pos==buttonsWanted) {
            alert("Player 2 wins!")
            if (p1pos%2==0) {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#F0DD7B";
            }
            if (p2pos%2==0) {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#F0DD7B";
            }
            p1pos=0;
            p2pos=0;
            document.getElementById("playingplayer").innerHTML=`Player ${player} has won `;
            document.getElementById("numberthrown").innerHTML="";
            player=1;
        }
        else {
            player=1;
        }
        document.getElementById('player').innerHTML=player;
    }
    else {
        alert("Incorrect");
    }
}


// Throw dice
function throwdice() {
    // If player clicks throw dice twice or more
    if (number>0) {
        alert("Dice already thrown")
    }
    //Generation a random number (max 6)
    else {
        number = Math.ceil(Math.random() * 6);
    }
    // console.log("threw " + number);
    // Placing restriction for not exceeding 100 and wasting the move(dice roll for player 1)
    if (player==1 && (p1pos+number)>buttonsWanted) {
        alert(`Player 1 threw ${number} but has less than ${number} moves left`);
        number=0;
        player=2;
        document.getElementById('player').innerHTML=2;
    }
    // Placing restriction for not exceeding 100 and wasting the move(dice roll for player 2)
    else if (player==2 && (p2pos+number)>buttonsWanted) {
            alert(`Player 2 threw ${number} but has less than ${number} moves left`);
            number=0;
            player=1;
            document.getElementById('player').innerHTML=1;
    }
    else {
        document.getElementById("playingplayer").innerHTML=`Player ${player} threw `;
        document.getElementById("numberthrown").innerHTML=`${number}`;
    }
}
