var temp0 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp5 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp6 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp7 = [0, 0, 0, 0, 0, 0, 0, 0];
var tempD = [temp0,temp1,temp2,temp3,temp4,temp5,temp6,temp7];

var status0 = [0, 0, 0, 0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0, 0, 0, 0],
    status5 = [0, 0, 0, 0, 0, 0, 0, 0],
    status6 = [0, 0, 0, 0, 0, 0, 0, 0],
    status7 = [0, 0, 0, 0, 0, 0, 0, 0];
var matrixStatus4 = [status0,status1,status2,status3,status4,status5,status6,status7];
var resHasil4 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false,false,false,false];
function graf4(){
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
  var in11=parseInt(document.getElementById('input11').value);
  var in12=parseInt(document.getElementById('input12').value);
  var arr=[in1,in2,in3,in4,in5,in6,in7,in8,in9,in10,in11,in12];
  cekInput(arr);

  var bobot0 = [0, in1, in2, 0, 0, 0, in3, 0],
      bobot1 = [in1, 0, 0, 0, 0, 0, in4, in5],
      bobot2 = [in2, 0, 0, in6, 0, 0, 0, in7],
      bobot3 = [0, 0, in6, 0, in10, in8, 0, in9],
      bobot4 = [0, 0, 0, in10, 0, 0, in11, 0],
      bobot5 = [0, 0, 0, in8, 0, 0, 0, in12],
      bobot6 = [in3, in4, 0, 0, in11, 0, 0, 0],
      bobot7 = [0, in5, in7, in9, 0, in12, 0, 0];
  var graf4 = [bobot0,bobot1,bobot2,bobot3,bobot4,bobot5,bobot6,bobot7];
  //console.log(table[4][3]); // Get the first item in the array

  var matrix0 = [0, 1, 1, 0, 0, 0, 1, 0],
      matrix1 = [1, 0, 0, 0, 0, 0, 1, 1],
      matrix2 = [1, 0, 0, 1, 0, 0, 0, 1],
      matrix3 = [0, 0, 1, 0, 1, 1, 0, 1],
      matrix4 = [0, 0, 0, 1, 0, 0, 1, 0],
      matrix5 = [0, 0, 0, 1, 0, 0, 0, 1],
      matrix6 = [1, 1, 0, 0, 1, 0, 0, 0],
      matrix7 = [0, 1, 1, 1, 0, 1, 0, 0];
  var matrixKetetanggaan4 = [matrix0,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6,matrix7];


  var statusNode4=[false, false, false, false, false, false, false, false];

  dijkstra(graf4, matrixKetetanggaan4, matrixStatus4, statusNode4, resHasil4,tempD);
  has[1]=tempD[0][1];
  has[2]=tempD[0][2];
  has[6]=tempD[0][6];
  statHas[0]=true;
  document.getElementById('hasil2').value=has[1];
  document.getElementById('hasil3').value=has[2];
  document.getElementById('hasil7').value=has[6];
  var x3 = document.getElementById("tabelGraf1").rows[2].cells;
  x3[1].innerHTML = has[2];
  var x2 = document.getElementById("tabelGraf1").rows[1].cells;
  x2[1].innerHTML = has[1];
  var x7 = document.getElementById("tabelGraf1").rows[6].cells;
  x7[1].innerHTML = has[6];
  document.getElementById('node1').style.fill="green";
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
    if((has[6]>=tempD[1][6])&&(tempD[1][6]!=0)){
      has[6]=tempD[1][6];
      //cn[2]=has[2];
    }
    if((has[7]>=tempD[1][7])&&(tempD[1][7]!=0)){
      has[7]=tempD[1][7];
      //cn[4]=has[4];
    }
    document.getElementById('hasil7').value=has[6];
    document.getElementById('hasil8').value=has[7];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
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
    if((has[3]>=tempD[2][3])&&(tempD[2][3]!=0)){
      has[3]=tempD[2][3];
      //cn[2]=has[2];
    }
    if((has[7]>=tempD[2][7])&&(tempD[2][7]!=0)){
      has[7]=tempD[2][7];
      //cn[4]=has[4];
    }
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil8').value=has[7];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];

    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
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
  if(va==has[3]){
    playBenar();
    statHas[3]=true;
    document.getElementById('node4').style.fill="green";
    if((has[2]>=tempD[3][2])&&(tempD[3][2]!=0)){
      has[2]=tempD[3][2];
      //cn[2]=has[2];
    }
    if((has[4]>=tempD[3][4])&&(tempD[3][4]!=0)){
      has[4]=tempD[3][4];
      //cn[4]=has[4];
    }
    if((has[5]>=tempD[3][5])&&(tempD[3][5]!=0)){
      has[5]=tempD[3][5];
      //cn[2]=has[2];
    }
    if((has[7]>=tempD[3][7])&&(tempD[3][7]!=0)){
      has[7]=tempD[3][7];
      //cn[4]=has[4];
    }
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil8').value=has[7];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
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
  if(va==has[4]){
    playBenar();
    statHas[4]=true;
    document.getElementById('node5').style.fill="green";
    if((has[3]>=tempD[4][3])&&(tempD[4][3]!=0)){
      has[3]=tempD[4][3];
      //cn[2]=has[2];
    }
    if((has[6]>=tempD[4][6])&&(tempD[4][6]!=0)){
      has[6]=tempD[4][6];
      //cn[4]=has[4];
    }
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil7').value=has[6];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes6(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[5]){
    playBenar();
    statHas[5]=true;
    document.getElementById('node6').style.fill="green";
    if((has[3]>=tempD[5][3])&&(tempD[5][3]!=0)){
      has[3]=tempD[5][3];
      //cn[2]=has[2];
    }
    if((has[7]>=tempD[5][7])&&(tempD[5][7]!=0)){
      has[7]=tempD[5][7];
      //cn[4]=has[4];
    }
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil8').value=has[7];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes7(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[6]){
    playBenar();
    statHas[6]=true;
    document.getElementById('node7').style.fill="green";
    if((has[1]>=tempD[6][1])&&(tempD[6][1]!=0)){
      has[1]=tempD[6][1];
      //cn[2]=has[2];
    }
    if((has[4]>=tempD[6][4])&&(tempD[6][4]!=0)){
      has[4]=tempD[6][4];
      //cn[4]=has[4];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil5').value=has[4];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes8(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[7]){
    playBenar();
    statHas[7]=true;
    document.getElementById('node8').style.fill="green";
    if((has[1]>=tempD[7][1])&&(tempD[7][1]!=0)){
      has[1]=tempD[7][1];
      //cn[2]=has[2];
    }
    if((has[2]>=tempD[7][2])&&(tempD[7][2]!=0)){
      has[2]=tempD[7][2];
      //cn[4]=has[4];
    }
    if((has[3]>=tempD[7][3])&&(tempD[7][3]!=0)){
      has[3]=tempD[7][3];
      //cn[4]=has[4];
    }
    if((has[5]>=tempD[7][5])&&(tempD[7][5]!=0)){
      has[5]=tempD[7][5];
      //cn[4]=has[4];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil6').value=has[5];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    cekHasilAkhir(statHas,tempD,matrixStatus4,resHasil4);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
