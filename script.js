
//Global variables
var player=1;
var p1pos=0;
var p2pos=0;
var number=0;
var button;
// Set this to the desired number of steps on the board
var buttonsWanted = 100;

// Gameboard maker
document.addEventListener("DOMContentLoaded", function(event) { 
    var doc = document;
    var docFrag = document.createDocumentFragment();

    for(var x = 1; x <= buttonsWanted; x++){
        //   var name="rameez";
        button = doc.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', x);
        button.setAttribute('name', x);
        button.setAttribute('id', 'boardbutton');
        button.setAttribute('onclick', 'recordposition('+x+')');
        // button.setAttribute('onclick', 'alert(\''+name+'\')');
        if (x%2==0) {
            button.style.backgroundColor="#ACD1EE";
        }
        if (x%2!=0) {
            button.style.backgroundColor="#F0DD7B";
        }
        button.style.height="50px";
        button.style.width="50px";
        docFrag.appendChild(button);
    }

    doc.getElementById('container').appendChild(docFrag);
});

    
// Record position on piece movement
function recordposition(val) {
    console.log(val);
    if (number==0) {
        alert("Throw dice");
    }
    else if (player==1 && (val-p1pos)==number) {
        if (p1pos>0 && p1pos!=p2pos){
            document.getElementsByName(p1pos)[0].style.color="black";
            if (p1pos%2==0) {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p1pos)[0].style.backgroundColor="#F0DD7B";
            }
        }
        if (p1pos>0 && p1pos==p2pos){
            document.getElementsByName(p1pos)[0].style.color="green";
            document.getElementsByName(p1pos)[0].style.backgroundColor="yellow";
        }
        p1pos=val;
        document.getElementsByName(val)[0].style.color="green";
        document.getElementsByName(val)[0].style.backgroundColor="pink";
        number=0;
        if (p1pos==p2pos) {
            p2pos=0;
            alert("Player 2 piece beaten by Player 1\nPlayer 2 to start from position zero.")
        }
        // document.getElementById('player').innerHTML=player;
        if (p1pos==buttonsWanted) {
            alert("Player 1 wins!")
            document.getElementsByName(p1pos)[0].style.color="black";
            document.getElementsByName(p1pos)[0].style.backgroundColor="#E5FCEE";
            document.getElementsByName(p2pos)[0].style.color="black";
            document.getElementsByName(p2pos)[0].style.backgroundColor="#E5FCEE";
            p1pos=0;
            p2pos=0;
        }
        else {
            player=2;
        }
        document.getElementById('player').innerHTML=player;
    }
    else if (player==2 && (val-p2pos)==number) {
        if (p2pos>0 && p2pos!=p1pos){
            document.getElementsByName(p2pos)[0].style.color="black";
            if (p2pos%2==0) {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#ACD1EE";
            }
            else {
                document.getElementsByName(p2pos)[0].style.backgroundColor="#F0DD7B";
            }
        }
        if (p2pos>0 && p2pos==p1pos){
            document.getElementsByName(p2pos)[0].style.color="green";
            document.getElementsByName(p2pos)[0].style.backgroundColor="pink";
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
            document.getElementsByName(p1pos)[0].style.color="black";
            document.getElementsByName(p1pos)[0].style.backgroundColor="#E5FCEE";
            document.getElementsByName(p2pos)[0].style.color="black";
            document.getElementsByName(p2pos)[0].style.backgroundColor="#E5FCEE";
            p1pos=0;
            p2pos=0;
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
    number = Math.ceil(Math.random() * 6);
    console.log("threw " + number);
    if (player==1 && (p1pos+number)>buttonsWanted) {
        alert(`Player 1 threw ${number} but has less than ${number} moves left`);
        number=0;
        player=2;
        document.getElementById.innerHTML=2;
    }
    else if (player==2 && (p2pos+number)>buttonsWanted) {
            alert(`Player 2 threw ${number} but has less than ${number} moves left`);
            number=0;
            player=1;
            document.getElementById.innerHTML=1;
    }
    else {
        alert("Player" + player + " threw " + number);
    }
}
