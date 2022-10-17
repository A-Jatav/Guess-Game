var n1 = "";
var n2 = "";
function storesave(){
    n1 = document.getElementById("p1name").value;
    n2 = document.getElementById("p2name").value;
    localStorage.setItem("player_1_name", n1);
    localStorage.setItem("player_2_name", n2);
    window.location = "primary.html"
}