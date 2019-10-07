var nb1 = 5;
var nb2 = 6;
var result = nb1 + nb2;

function Add(){
    document.getElementById("result-exo-1.1").innerHTML = result;
}

var nb1 = 5;
var nb2 = 6;
var result2 = nb1 * nb2;

function Multiplier ( ) {
    document.getElementById("result-exo-1.2").innerHTML = result2;
}

var nb1 = 5;
var nb2 = 6;
var result3 = nb1 / nb2;

function Division ( ) {
    document.getElementById("result-exo-1.3").innerHTML = result3;
}


function getSoustraction ( ) {
    var nb1y = document.getElementById("ex1_input1").value;
    var nb2y = document.getElementById("ex1_input2").value;
    var result4 = nb1y - nb2y;
    document.getElementById("result-exo-1.4").innerHTML = result4;
}


function getMultiplication ( ) {
var nb3 = document.getElementById("ex1_input3").value;
var nb4 = document.getElementById("ex1_input4").value;
var result5 = nb3 * nb4;
    document.getElementById("result-exo-1.5").innerHTML = result5;
}

function getDivision ( ) {
    var nb5 = document.getElementById("ex2_input5").value;
    var nb6 = document.getElementById("ex2_input6").value;
    var result6 = nb5 / nb6;
        document.getElementById("result-exo-2.1").innerHTML = result6;
}

function getAdd ( ) {
    var nb7 = document.getElementById("ex2_input7").value;
    var nb8 = document.getElementById("ex2_input8").value;
    var result7 = nb7 + "+" + nb8;
    var total = eval(result7);

        document.getElementById("result-exo-2.2").innerHTML = total;
}

function Division82 ( ) {
    var nb9 = 82;
    var nb10 = 8; 
    var result8 = nb9 % nb10;
    document.getElementById("result-exo-3").innerHTML = result8;
}

    var total = 0;
    document.getElementById("result-exo-4").innerHTML = total;

function Add10 ( ) {
    total = total + 10;
    document.getElementById("result-exo-4").innerHTML = total;
}

function Div5 ( ) {
    total = total /5;
    document.getElementById("result-exo-4").innerHTML = total;
}

function Mul8 ( ) {
    total = total *8;
    document.getElementById("result-exo-4").innerHTML = total;
}

function Sous2 ( ) {
    total = total -2;
    document.getElementById("result-exo-4").innerHTML = total;
}

function Reset ( ) {
    total = 0;
    document.getElementById("result-exo-4").innerHTML = total;
}

function Random () {
    var nombreRandom = Math.floor(Math.random() * (1000 - 500) + 500);
    document.getElementById("ex5_result").innerHTML = nombreRandom;
}

function Param (x) {
    var totalParam = x / 2;
    document.getElementById("ex6_result").innerHTML = totalParam;
}
Param (10);

function Param2 (x , y) {
    var totalparam2 = x-y;
    document.getElementById("ex7_result").innerHTML = totalparam2;
}

Param2 (4 , 3);

function Param3 (x , y , z) {
    var divparam = x / y;
    var totalparam3 = divparam % z;
    document.getElementById("ex8_result").innerHTML = totalparam3;
}

Param3 (300 , 2 , 8);


function convertToPound () {
    var a = document.getElementById("ex9_input1").value;
    var tet= a * 2.205;
    document.getElementById("ex9_1_result").innerHTML = tet;
}

function convertToKg () {
    var b = document.getElementById("ex9_input2").value;
    var tet2= b / 2.205;
    document.getElementById("ex9_2_result").innerHTML = tet2;
}

var phrase ="";
function iterateWords () {
    var mot = document.getElementById("ex10_input").value;
    phrase = phrase + mot; 
    var mot = document.getElementById("ex10_result").innerHTML = phrase;   
}

function resetWords () {
    phrase ="";
    document.getElementById("ex10_result").innerHTML = phrase;
}

var CoteRandom = Math.floor(Math.random() * (20 - 0.5) + 0.5); 

function CalculGain () {
    var montant = document.getElementById("ex11_input").value;
    document.getElementById("ex11_result").innerHTML = CoteRandom;
    var benef = montant * CoteRandom;
    document.getElementById("ex11_result").innerHTML = benef;
}

function CoteRandom () {
    CoteRandom = Math.floor(Math.random() * (20 - 0.5) + 0.5);
    document.getElementById("ex11_cote").innerHTML = CoteRandom; 
}

function estimation() {
    var kilometre = document.getElementById("ex12_input").value;
    document.getElementById("ex12_result").innerHTML = kilometre;
    var total_est = kilometre / 1000;
    document.getElementById("ex12_result").innerHTML = total_est;
}
   
function W_screen () {
    var Wscreen=screen.width;
    document.getElementById("ex13_result").innerHTML = Wscreen;
}

function multiple () {
    var nb15 = document.getElementById("ex15_input").value;
    if (nb15 == 0){
        return "multiple de 3";
      } else {
        return "pas multiple de 7";
      }
}
      /*
function Reponse_ex15 () {
    document.getElementById("reponse_ex15").value;
}
*/


function highlight () {
    var price = document.getElementById("price").value;
    console.log(price);
    var low = document.getElementById("low");
    var medium = document.getElementById("medium");
    var high = document.getElementById("high");
    
    if (0 < price && price < 10) {
        low.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    }
    else if (11< price && price < 25 ) {
        medium.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    }
    else if (26< price && price < 30  ) {
        high.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    }
}




