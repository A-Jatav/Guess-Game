var playernamex1 = localStorage.getItem("player_1_name");
var playernamex2 = localStorage.getItem("player_2_name");
var scorex1 = 0;
var scorex2 = 0;
document.getElementById("sahi").innerHTML = "";
document.getElementById("p1").innerHTML = playernamex1 + ":";
document.getElementById("p2").innerHTML = playernamex2 + ":";
document.getElementById("s1").innerHTML = scorex1;
document.getElementById("s2").innerHTML = scorex2;
document.getElementById("qt").innerHTML = "Question Turn - " + playernamex1;
document.getElementById("attt").innerHTML = "Answer Turn - " + playernamex2;
var wordxbl = "";
var wordxb = "";
var hintx = "";
var hintxl = "";
function send() {
    document.getElementById("sahi").innerHTML = "";
    document.getElementById("galat").innerHTML = "";
    document.getElementById("expose").style = "display: none;"
    document.getElementById("word").style = "display: none;"
    document.getElementById("hideit").style = "display: none;"
    document.getElementById("sendbutnxx").style = "display: none;"
    wordxb = document.getElementById("word").value
    wordxbl = wordxb.toLowerCase();
    hintx = document.getElementById("expose").value;
    hintxl = hintx.toLowerCase();
    var rcharat1 = wordxbl.charAt(1);
    var lenth = wordxbl.length;
    var rcharat2 = wordxbl.charAt(Math.floor(lenth / 2));
    var rcharat3 = wordxbl.charAt(lenth - 1);
    var replacecr1 = wordxbl.replace(rcharat1, "_");
    var replacecr2 = replacecr1.replace(rcharat2, "_");
    var replacecr3 = replacecr2.replace(rcharat3, "_");
    var lbl = "<h4 id='qst'>Q. " + replacecr3 + "</h4>";
    var hnt = "<br>Hint: <span id='hintdisplay'></span>"
    var txtbx = "<br>Answer:<input type='text' id='txtbox'>";
    var butn = "<br><br><button onclick='chk()' class='btn-success'>Check</button><br><br>";
    var final = lbl + hnt + txtbx + butn;
    document.getElementById("word").value = "";
    document.getElementById("expose").value = "";
    document.getElementById("answer").innerHTML = final;
    document.getElementById("hintdisplay").innerHTML = hintxl;
};
var question_turn = "player1";
var answer_turn = "player2";
function chk() {
    document.getElementById("word").style = "display: inline;";
    document.getElementById("hideit").style = "display: inline;";
    document.getElementById("sendbutnxx").style = "display: inline;";
    document.getElementById("expose").style = "display: inline;"
    var uans = document.getElementById("txtbox").value;
    var uansl = uans.toLowerCase();
    if (uansl == wordxbl) {
        if (answer_turn == "player1") {
            scorex1 = scorex1 + 1;
            document.getElementById("s1").innerHTML = scorex1
        }
        else {
            scorex2 = scorex2 + 1;
            document.getElementById("s2").innerHTML = scorex2
        }
        document.getElementById("sahi").innerHTML = "CORRECT ANSWER!";
        document.getElementById("sahi").style = " color: green";
    }
    else {
        document.getElementById("sahi").innerHTML = "WRONG ANSWER!";
        document.getElementById("galat").innerHTML = "The word was " + wordxbl;
        document.getElementById("sahi").style = "color: red";
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("qt").innerHTML = "Question Turn - " + playernamex2;
    }
    else {
        question_turn = "player1"
        document.getElementById("qt").innerHTML = "Question Turn - " + playernamex1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("attt").innerHTML = "Answer Turn - " + playernamex2;
    }
    else {
        answer_turn = "player1"
        document.getElementById("attt").innerHTML = "Answer Turn - " + playernamex1;
    }
    document.getElementById("answer").innerHTML = "";
}