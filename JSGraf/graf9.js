var temp0 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp5 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp6 = [0, 0, 0, 0, 0, 0, 0, 0],
    temp7 = [0, 0, 0, 0, 0, 0, 0, 0];
var tempI = [temp0,temp1,temp2,temp3,temp4,temp5,temp6,temp7];
var status0 = [0, 0, 0, 0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0, 0, 0, 0],
    status5 = [0, 0, 0, 0, 0, 0, 0, 0],
    status6 = [0, 0, 0, 0, 0, 0, 0, 0],
    status7 = [0, 0, 0, 0, 0, 0, 0, 0];
var matrixStatus9 = [status0,status1,status2,status3,status4,status5,status6,status7];
var resHasil9 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false,false,false,false];
function graf9(){
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
  var bobot0 = [0,in1, in2, 0, 0, 0, in7, 0],
      bobot1 = [0, 0, 0, 0, 0, 0, 0, in8],
      bobot2 = [0, 0, 0, 0, in6, 0, 0, 0],
      bobot3 = [0, in3, 0, 0, 0, in4, 0, 0],
      bobot4 = [0, 0, 0, , 0, 0, in11, 0],
      bobot5 = [0, 0, 0, 0, in5, 0, 0, in10],
      bobot6 = [0, 0, 0, in9, 0, 0, 0, 0],
      bobot7 = [0, 0, in12, 0, 0, 0, 0, 0];
  var graf9 = [bobot0,bobot1,bobot2,bobot3,bobot4,bobot5,bobot6,bobot7];
  //console.log(table[4][3]); // Get the first item in the array

  var matrix0 = [0, 1, 1, 0, 0, 0, 1, 0],
      matrix1 = [0, 0, 0, 0, 0, 0, 0, 1],
      matrix2 = [0, 0, 0, 0, 1, 0, 0, 0],
      matrix3 = [0, 1, 0, 0, 0, 1, 0, 0],
      matrix4 = [0, 0, 0, 0, 0, 0, 1, 0],
      matrix5 = [0, 0, 0, 0, 1, 0, 0, 1],
      matrix6 = [0, 0, 0, 1, 0, 0, 0, 0],
      matrix7 = [0, 0, 1, 0, 0, 0, 0, 0];
  var matrixKetetanggaan9 = [matrix0,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6,matrix7];


  var statusNode9=[false, false, false, false, false, false,false,false];

  dijkstra(graf9, matrixKetetanggaan9, matrixStatus9, statusNode9, resHasil9,tempI);
  has[1]=tempI[0][1];
  has[2]=tempI[0][2];
  has[6]=tempI[0][6];
  statHas[0]=true;

  document.getElementById('hasil2').value=has[1];
  document.getElementById('hasil3').value=has[2];
  document.getElementById('hasil7').value=has[6];
  var x2 = document.getElementById("tabelGraf1").rows[1].cells;
  x2[1].innerHTML = has[1];
  var x3 = document.getElementById("tabelGraf1").rows[2].cells;
  x3[1].innerHTML = has[2];
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
    if((has[7]>=tempI[1][7])&&(tempI[1][7]!=0)){
      has[7]=tempI[1][7];
    }

    document.getElementById('hasil8').value=has[7];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    document.getElementById('node2').style.fill="green";
    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[4]>=tempI[2][4])&&(tempI[2][4]!=0)){
      has[4]=tempI[2][4];
      //cn[2]=has[2];
    }

    document.getElementById('hasil5').value=has[4];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];

    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[5]>=tempI[3][5])&&(tempI[3][5]!=0)){
      has[5]=tempI[3][5];
      //cn[2]=has[2];
    }
    if((has[1]>=tempI[3][1])&&(tempI[3][1]!=0)){
      has[1]=tempI[3][1];
      //cn[2]=has[2];
    }
    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil2').value=has[1];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];

    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[6]>=tempI[4][6])&&(tempI[4][6]!=0)){
      has[6]=tempI[4][6];
      //cn[2]=has[2];
    }
    document.getElementById('hasil7').value=has[6];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[7]>=tempI[5][7])&&(tempI[5][7]!=0)){
      has[7]=tempI[5][7];
      //cn[2]=has[2];
    }
    if((has[4]>=tempI[5][4])&&(tempI[5][4]!=0)){
      has[4]=tempI[5][4];
      //cn[2]=has[2];
    }
    document.getElementById('hasil8').value=has[7];
    document.getElementById('hasil5').value=has[4];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];

    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[3]>=tempI[6][3])&&(tempI[6][3]!=0)){
      has[3]=tempI[6][3];
      //cn[2]=has[2];
    }
    document.getElementById('hasil4').value=has[3];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
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
    if((has[2]>=tempI[7][2])&&(tempI[7][2]!=0)){
      has[2]=tempI[7][2];
      //cn[2]=has[2];
    }
    document.getElementById('hasil3').value=has[2];

    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];

    cekHasilAkhir(statHas,tempI,matrixStatus9,resHasil9);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
