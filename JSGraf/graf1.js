var temp0 = [0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0];
var tempB = [temp0,temp1,temp2,temp3,temp4];

var status0 = [0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0];
var matrixStatus1 = [status0,status1,status2,status3,status4];
var resHasil1 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false];
function graf1(){
  var in1=parseInt(document.getElementById('input1').value);
  var in2=parseInt(document.getElementById('input2').value);
  var in3=parseInt(document.getElementById('input3').value);
  var in4=parseInt(document.getElementById('input4').value);
  var in5=parseInt(document.getElementById('input5').value);
  var in6=parseInt(document.getElementById('input6').value);
  var in7=parseInt(document.getElementById('input7').value);
  var in8=parseInt(document.getElementById('input8').value);
  var in9=parseInt(document.getElementById('input9').value);
  var in10=parseInt(document.getElementById('input10').value);
  var arr=[in1,in2,in3,in4,in5,in6,in7,in8,in9,in10];
  cekInput(arr);
  var bobot0 = [0, in1, in2, in6, in7],
      bobot1 = [in1, 0, in8, in5, in9],
      bobot2 = [in2, in8, 0, in10, in3],
      bobot3 = [in6, in5, in10, 0, in4],
      bobot4 = [in7, in9, in3, in4, 0];
  var graf1 = [bobot0,bobot1,bobot2,bobot3,bobot4];
  //console.log(table[4][3]); // Get the first item in the array

  var matrix0 = [0, 1, 1, 1, 1],
      matrix1 = [1, 0, 1, 1, 1],
      matrix2 = [1, 1, 0, 1, 1],
      matrix3 = [1, 1, 1, 0, 1],
      matrix4 = [1, 1, 1, 1, 0];
  var matrixKetetanggaan1 = [matrix0,matrix1,matrix2,matrix3,matrix4];

  var statusNode1=[false, false, false, false, false];

  dijkstra(graf1, matrixKetetanggaan1, matrixStatus1, statusNode1, resHasil1,tempB);
  has[1]=tempB[0][1];
  has[2]=tempB[0][2];
  has[3]=tempB[0][3];
  has[4]=tempB[0][4];

  statHas[0]=true;

  document.getElementById('hasil2').value=has[1];
  document.getElementById('hasil3').value=has[2];
  document.getElementById('hasil4').value=has[3];
  document.getElementById('hasil5').value=has[4];
  document.getElementById('node1').style.fill="green";
  var x2 = document.getElementById("tabelGraf1").rows[1].cells;
  x2[1].innerHTML = has[1];
  var x3 = document.getElementById("tabelGraf1").rows[2].cells;
  x3[1].innerHTML = has[2];
  var x4 = document.getElementById("tabelGraf1").rows[3].cells;
  x4[1].innerHTML = has[3];
  var x5 = document.getElementById("tabelGraf1").rows[4].cells;
  x5[1].innerHTML = has[4];
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
    playBenar();
    statHas[1]=true;
    document.getElementById('node2').style.fill="green";
    if((has[2]>=tempB[1][2])&&(tempB[1][2]!=0)){
      has[2]=tempB[1][2];
      //cn[2]=has[2];
    }
    if((has[3]>=tempB[1][3])&&(tempB[1][3]!=0)){
      has[3]=tempB[1][3];
      //cn[4]=has[4];
    }
    if((has[4]>=tempB[1][4])&&(tempB[1][4]!=0)){
      has[4]=tempB[1][4];
      //cn[2]=has[2];
    }
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil5').value=has[4];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    cekHasilAkhir(statHas,tempB,matrixStatus1,resHasil1);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu");
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
    if((has[1]>=tempB[2][1])&&(tempB[2][1]!=0)){
      has[1]=tempB[2][1];
      //cn[2]=has[2];
    }
    if((has[3]>=tempB[2][3])&&(tempB[2][3]!=0)){
      has[3]=tempB[2][3];
      //cn[4]=has[4];
    }
    if((has[4]>=tempB[2][4])&&(tempB[2][4]!=0)){
      has[4]=tempB[2][4];
      //cn[2]=has[2];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil5').value=has[4];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    cekHasilAkhir(statHas,tempB,matrixStatus1,resHasil1);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu")
}
}
function panggilRes4() {
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[3]){
    playBenar();
    statHas[3]=true;
    document.getElementById('node4').style.fill="green";
    if((has[1]>=tempB[3][1])&&(tempB[3][1]!=0)){
      has[1]=tempB[3][1];
      //cn[2]=has[2];
    }
    if((has[2]>=tempB[3][2])&&(tempB[3][2]!=0)){
      has[2]=tempB[3][2];
      //cn[4]=has[4];
    }
    if((has[4]>=tempB[3][4])&&(tempB[3][4]!=0)){
      has[4]=tempB[3][4];
      //cn[2]=has[2];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil5').value=has[4];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    cekHasilAkhir(statHas,tempB,matrixStatus1,resHasil1);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes5() {
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[4]){
    playBenar();
    statHas[4]=true;
    document.getElementById('node5').style.fill="green";
    if((has[1]>=tempB[4][1])&&(tempB[4][1]!=0)){
      has[1]=tempB[4][1];
      //cn[2]=has[2];
    }
    if((has[3]>=tempB[4][3])&&(tempB[4][3]!=0)){
      has[3]=tempB[4][3];
      //cn[4]=has[4];
    }
    if((has[2]>=tempB[4][2])&&(tempB[4][2]!=0)){
      has[2]=tempB[4][2];
      //cn[2]=has[2];
    }
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil2').value=has[1];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    cekHasilAkhir(statHas,tempB,matrixStatus1,resHasil1);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
