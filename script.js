let say = 1;
let o = "o";
let x = "x"
let M = [];
let xal1 = 0;
let xal2 = 0;
onload = function(){
    document.getElementById("span1").innerHTML = prompt("1. Oyuncu");
    document.getElementById("span2").innerHTML = prompt("2. Oyuncu");
    Massiv();
    Cedvel();
}
function Massiv(){
    for(let i = 0; i < 3; i++){
        M[i] = [];
    }
}
function Cedvel(){
    let tbl = "";
    for(let i = 0; i < 3; i++){
        tbl += "<tr>";
        for(let j = 0; j < 3; j++){
            M[i][j] = M[i][j] == undefined ? "" : M[i][j];
            tbl += `<td onclick = "Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += "</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}
function Click(i, j){
    if (M[i][j] == "") {
        if (say % 2 == 0) {
            M[i][j] = o;
        }
        else {
            M[i][j] = x;
        }
        say++;
        Cedvel();
        setTimeout(Yoxla, 700);
    }
}
function Yoxla(){
    if(M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != ""){
        alert("Qalib" + " - " + M[0][0]);
        if(M[0][0] == x){
            xal1++;
            document.getElementById("input1").value = xal1;
            say = 1;
        }
        else if(M[0][0] == o){
            xal2++;
            document.getElementById("input2").value = xal2;
            say = 1;
        }
        Massiv();
        Cedvel();
    }
    if(M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != ""){
        alert("Qalib" + " - " + M[0][2]);
        if(M[0][2] == x){
            xal1++;
            document.getElementById("input1").value = xal1;
            say = 1;
        }
        else if(M[0][0] == o){
            xal2++;
            document.getElementById("input2").value = xal2;
            say = 1;
        }
        Massiv();
        Cedvel();
    }
    for(let i = 0; i < 3; i++){
        if(M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != ""){
            alert("Qalib" + " - " + M[i][0]);
            if(M[i][0] == x){
                xal1++;
                document.getElementById("input1").value = xal1;
                say = 1;
            }
            else if(M[0][0] == o){
                xal2++;
                document.getElementById("input2").value = xal2;
                say = 1;
            }
            Massiv();
            Cedvel();
        }
    }
    for(let i = 0; i < 3; i++){
        if(M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != ""){
            alert("Qalib" + " - " + M[0][i]);
            if(M[0][i] == x){
                xal1++;
                document.getElementById("input1").value = xal1;
                say = 1;
            }
            else if(M[0][0] == o){
                xal2++;
                document.getElementById("input2").value = xal2;
                say = 1;
            }
            Massiv();
            Cedvel();
        }
    }
    if(say % 10 == 0){
        alert("Bərabər!");
        say = 1;
        Massiv();
        Cedvel();
      }
}
function Reset(){
    document.getElementById("input2").value = 0;
    document.getElementById("input1").value = 0;
    xal1 = xal2 = 0;
    Massiv();
    Cedvel();
}