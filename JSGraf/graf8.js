var temp0 = [0, 0, 0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0, 0, 0],
    temp5 = [0, 0, 0, 0, 0, 0, 0],
    temp6 = [0, 0, 0, 0, 0, 0, 0];
var tempH = [temp0,temp1,temp2,temp3,temp4,temp5,temp6];
var status0 = [0, 0, 0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0, 0, 0],
    status5 = [0, 0, 0, 0, 0, 0, 0],
    status6 = [0, 0, 0, 0, 0, 0, 0];
var matrixStatus8 = [status0,status1,status2,status3,status4,status5,status6];
var resHasil8 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false,false,false];
function graf8(){
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
  var arr=[in1,in2,in3,in4,in5,in6,in7,in8,in9,in10,in11];
  cekInput(arr);
  var bobot0 = [0,in1, in2, in3, 0, 0, 0],
      bobot1 = [0, 0, 0, 0, 0, 0, 0],
      bobot2 = [0, in4, 0, in5, 0, in6, 0],
      bobot3 = [0, 0, 0, 0, 0, in7, in11],
      bobot4 = [0, 0, 0, in8, 0, 0, 0],
      bobot5 = [0, 0, 0, 0, 0, 0, in10],
      bobot6 = [0, 0, 0, 0, in9, 0, 0];
  var graf8 = [bobot0,bobot1,bobot2,bobot3,bobot4,bobot5,bobot6];
  //console.log(table[4][3]); // Get the first item in the array

  var matrix0 = [0, 1, 1, 1, 0, 0, 0],
      matrix1 = [0, 0, 0, 0, 0, 0, 0],
      matrix2 = [0, 1, 0, 1, 0, 1, 0],
      matrix3 = [0, 0, 0, 0, 0, 1, 1],
      matrix4 = [0, 0, 0, 1, 0, 0, 0],
      matrix5 = [0, 0, 0, 0, 0, 0, 1],
      matrix6 = [0, 0, 0, 0, 1, 0, 0];
  var matrixKetetanggaan8 = [matrix0,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6];

  var statusNode8=[false, false, false, false, false, false,false];

  dijkstra(graf8, matrixKetetanggaan8, matrixStatus8, statusNode8, resHasil8,tempH);
  has[1]=tempH[0][1];
  has[2]=tempH[0][2];
  has[3]=tempH[0][3];
  statHas[0]=true;

  document.getElementById('hasil2').value=has[1];
  document.getElementById('hasil3').value=has[2];
  document.getElementById('hasil4').value=has[3];
  var x2 = document.getElementById("tabelGraf1").rows[1].cells;
  x2[1].innerHTML = has[1];
  var x3 = document.getElementById("tabelGraf1").rows[2].cells;
  x3[1].innerHTML = has[2];
  var x4 = document.getElementById("tabelGraf1").rows[3].cells;
  x4[1].innerHTML = has[3];
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
    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
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
    if((has[1]>=tempH[2][1])&&(tempH[2][1]!=0)){
      has[1]=tempH[2][1];
      //cn[2]=has[2];
    }
    if((has[3]>=tempH[2][3])&&(tempH[2][3]!=0)){
      has[3]=tempH[2][3];
      //cn[2]=has[2];
    }
    if((has[5]>=tempH[2][5])&&(tempH[2][5]!=0)){
      has[5]=tempH[2][5];
      //cn[2]=has[2];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil6').value=has[5];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
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
    if((has[5]>=tempH[3][5])&&(tempH[3][5]!=0)){
      has[5]=tempH[3][5];
      //cn[2]=has[2];
    }
    if((has[6]>=tempH[3][6])&&(tempH[3][6]!=0)){
      has[6]=tempH[3][6];
      //cn[2]=has[2];
    }
    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil7').value=has[6];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];

    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
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
    if((has[3]>=tempH[4][3])&&(tempH[4][3]!=0)){
      has[3]=tempH[4][3];
      //cn[2]=has[2];
    }
    document.getElementById('hasil4').value=has[3];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];


    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
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
    if((has[6]>=tempH[5][6])&&(tempH[5][6]!=0)){
      has[6]=tempH[5][6];
      //cn[2]=has[2];
    }
    document.getElementById('hasil7').value=has[6];

    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
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
    if((has[4]>=tempH[6][4])&&(tempH[6][4]!=0)){
      has[4]=tempH[6][4];
      //cn[2]=has[2];
    }
    document.getElementById('hasil5').value=has[4];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];

    cekHasilAkhir(statHas,tempH,matrixStatus8,resHasil8);
  }
  else{
      playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
