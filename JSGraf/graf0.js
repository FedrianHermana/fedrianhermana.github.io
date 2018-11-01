var temp0 = [0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0];
var tempA = [temp0,temp1,temp2,temp3,temp4];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false];
var status0 = [0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0];
var matrixStatus0 = [status0,status1,status2,status3,status4];
var resHasil0 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
var y;
function graf0(){
var in1=parseInt(document.getElementById('input1').value);
var in2=parseInt(document.getElementById('input2').value);
var in3=parseInt(document.getElementById('input3').value);
var in4=parseInt(document.getElementById('input4').value);
var in5=parseInt(document.getElementById('input5').value);
var in6=parseInt(document.getElementById('input6').value);
var in7=parseInt(document.getElementById('input7').value);
var arr=[in1,in2,in3,in4,in5,in6,in7];
cekInput(arr);
var bobot0 = [0, in1, in7, in4, 0],
    bobot1 = [in1, 0, in2, 0, in5],
    bobot2 = [in7, in2, 0, in3, in6],
    bobot3 = [in4, 0, in3, 0, 0],
    bobot4 = [0, in5, in6, 0, 0];
var graf0 = [bobot0,bobot1,bobot2,bobot3,bobot4];
var matrix0 = [0, 1, 1, 1, 0],
    matrix1 = [1, 0, 1, 0, 1],
    matrix2 = [1, 1, 0, 1, 1],
    matrix3 = [1, 0, 1, 0, 0],
    matrix4 = [0, 1, 1, 0, 0];
var matrixKetetanggaan0 = [matrix0,matrix1,matrix2,matrix3,matrix4];

var statusNode0=[false, false, false, false, false];

dijkstra(graf0, matrixKetetanggaan0, matrixStatus0, statusNode0, resHasil0,tempA);
has[1]=tempA[0][1];
has[2]=tempA[0][2];
has[3]=tempA[0][3];
statHas[0]=true;

document.getElementById('hasil2').value=has[1];
document.getElementById('hasil3').value=has[2];
document.getElementById('hasil4').value=has[3];
document.getElementById('node1').style.fill="green";
//document.getElementById('01').style.stroke="green";
var x2 = document.getElementById("tabelGraf1").rows[1].cells;
x2[1].innerHTML = has[1];
var x3 = document.getElementById("tabelGraf1").rows[2].cells;
x3[1].innerHTML = has[2];
var x4 = document.getElementById("tabelGraf1").rows[3].cells;
x4[1].innerHTML = has[3];
//y = document.getElementById("benarAudio");
}



function panggilRes2(){
  if (statHas[0]==true) {
    var va = Number.MAX_SAFE_INTEGER;
    for (var g = 0; g < has.length; g++) {
        if ((has[g] < va)&&(statHas[g]==false)) {
          va = has[g];
        }
     }
    if(va==has[1]){
      statHas[1]=true;
      document.getElementById('node2').style.fill="green";
      playBenar();

      if((has[2]>=tempA[1][2])&&(tempA[1][2]!=0)){
        has[2]=tempA[1][2];
        //cn[2]=has[2];
      }
      if((has[4]>=tempA[1][4])&&(tempA[1][4]!=0)){
        has[4]=tempA[1][4];
        //cn[4]=has[4];
      }
      document.getElementById('hasil3').value=has[2];
      document.getElementById('hasil5').value=has[4];
      var x5 = document.getElementById("tabelGraf1").rows[4].cells;
      x5[1].innerHTML = has[4];
      var x3 = document.getElementById("tabelGraf1").rows[2].cells;
      x3[1].innerHTML = has[2];
      cekHasilAkhir(statHas,tempA,matrixStatus0,resHasil0);
    }
    else{
      playSalah();
    }
  }
  else{
    alert("pilih dahulu node start");
  }
}

function panggilRes3(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];
      }
   }
   if(va==has[2]){
     playBenar();
     statHas[2]=true;
     document.getElementById('node3').style.fill="green";
     if((has[1]>=tempA[2][1])&&(tempA[2][1]!=0)){
         has[1]=tempA[2][1];
      }
      if((has[3]>=tempA[2][3])&&(tempA[2][3]!=0)){
       has[3]=tempA[2][3];

       }
       if((has[4]>=tempA[2][4])&&(tempA[2][4]!=0)){
        has[4]=tempA[2][4];
      }
      document.getElementById('hasil2').value=has[1];
      document.getElementById('hasil5').value=has[4];
      document.getElementById('hasil4').value=has[3];
      var x4 = document.getElementById("tabelGraf1").rows[3].cells;
      x4[1].innerHTML = has[3];
      var x2 = document.getElementById("tabelGraf1").rows[1].cells;
      x2[1].innerHTML = has[1];
      var x5 = document.getElementById("tabelGraf1").rows[4].cells;
      x5[1].innerHTML = has[4];
      cekHasilAkhir(statHas,tempA,matrixStatus0,resHasil0);
   }
   else{
     playSalah();
   }
 }
 else{
   alert("pilih dahulu node start");
 }
}
function panggilRes4(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];
      }
   }
   if (va==has[3]) {
     playBenar();
     statHas[3]=true;
     document.getElementById('node4').style.fill="green";

     if((has[2]>=tempA[3][2])&&(tempA[3][2]!=0)){
       has[2]=tempA[3][2];
    }
    document.getElementById('hasil3').value=has[2];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    cekHasilAkhir(statHas,tempA,matrixStatus0,resHasil0);
   }
   else{
     playSalah();
   }
 }
 else{
   alert("pilih dahulu node start");
 }
}
function panggilRes5(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];
      }
   }
   if (va==has[4]) {
     playBenar();
      statHas[4]=true;
     document.getElementById('node5').style.fill="green";

     if((has[1]>=tempA[4][1])&&(tempA[4][1]!=0)){
       has[1]=tempA[4][1];
    }
    if((has[2]>=tempA[4][2])&&(tempA[4][2]!=0)){
     has[2]=tempA[4][2];
     }

     document.getElementById('hasil2').value=has[1];
     document.getElementById('hasil3').value=has[2];
     var x2 = document.getElementById("tabelGraf1").rows[1].cells;
     x2[1].innerHTML = has[1];
     var x3 = document.getElementById("tabelGraf1").rows[2].cells;
     x3[1].innerHTML = has[2];
     cekHasilAkhir(statHas,tempA,matrixStatus0,resHasil0);
   }
   else{
     playSalah();
   }
 }
 else{
   alert("pilih dahulu node start");
 }
}
