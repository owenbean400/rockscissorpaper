var act = 0
var dis = 0
var you = 0
var res = 0
var score = 0

function randy(){
    act = Math.floor(Math.random() * 3);
    console.log(act);
    decider();
}

function decider(){
    (act == 0) ? dis = "Rock":
    (act == 1) ? dis = "Scissor":
    (act == 2) ? dis = "Paper":
    console.log("Error");
    determine();
}

function change(){
    (you == 0) ? you = "Rock":
    (you == 1) ? you = "Scissor":
    (you == 2) ? you = "Paper":
    console.log("Error");
    document.getElementById("display").innerHTML = you + " VS " + dis;
    document.getElementById("result").innerHTML = res;
    document.getElementById("score").innerHTML = "score " + score;
}

function determine(){
    if(you == 0){
        document.getElementById("leftImg").src = "rock-02.png";
        if(act == 0){
            document.getElementById("rightImg").src = "rock-02.png";
            document.getElementById("result").style.color = "#000000";
            res = "Tie";
        }
        else if(act == 1){
            document.getElementById("rightImg").src = "scissor-04.png";
            document.getElementById("result").style.color = "#00cc00";
            score++;
            res = "You Win";
        }
        else{
            document.getElementById("rightImg").src = "paper-03.png";
            document.getElementById("result").style.color = "#ff0000";
            score--;
            res = "You Loose";
        }
    }
    else if(you == 1){
        document.getElementById("leftImg").src = "scissor-04.png";
        if(act == 1){
            document.getElementById("rightImg").src = "scissor-04.png";
            document.getElementById("result").style.color = "#000000";
            res = "Tie";
        }
        else if(act == 2){
            document.getElementById("rightImg").src = "paper-03.png";
            document.getElementById("result").style.color = "#00cc00";
            score++;
            res = "You Win";
        }
        else{
            document.getElementById("rightImg").src = "rock-02.png";
            document.getElementById("result").style.color = "#ff0000";
            score--;
            res = "You Loose";
        }
    }
    else if(you == 2){
        document.getElementById("leftImg").src = "paper-03.png";
        if(act == 2){
            document.getElementById("rightImg").src = "paper-03.png";
            document.getElementById("result").style.color = "#000000";
            res = "Tie";
        }
        else if(act == 0){
            document.getElementById("rightImg").src = "rock-02.png";
            document.getElementById("result").style.color = "#00cc00";
            score++;
            res = "You Win";
        }
        else{
            document.getElementById("rightImg").src = "scissor-04.png";
            document.getElementById("result").style.color = "#ff0000";
            score--;
            res = "You Loose";
        }
    }
    else{
        console.log("Error");
    }
    change();
}

