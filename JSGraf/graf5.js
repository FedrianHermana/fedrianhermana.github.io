
var temp0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temp9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tempE = [temp0,temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9];
var has=[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
var statHas=[false,false,false,false,false,false,false,false,false,false];

var status0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    status9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var matrixStatus5 = [status0,status1,status2,status3,status4,status5,status6,status7,status8,status9];
var resHasil5 =[0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
function graf5(){
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
  var in13=parseInt(document.getElementById('input13').value);
  var in14=parseInt(document.getElementById('input14').value);
  var in15=parseInt(document.getElementById('input15').value);
  var in16=parseInt(document.getElementById('input16').value);
  var in17=parseInt(document.getElementById('input17').value);
  var in18=parseInt(document.getElementById('input18').value);
  var arr=[in1,in2,in3,in4,in5,in6,in7,in8,in9,in10,in11,in12,in13,in14,in15,in16,in17,in18];
  cekInput(arr);
  var bobot0 = [0, in1, in2, 0, 0, 0, 0, 0, 0, 0],
      bobot1 = [in1, 0, 0, in3, in9, 0, 0, 0, 0, 0],
      bobot2 = [in2, 0, 0, in4, 0, in5, 0, 0, 0, 0],
      bobot3 = [0, in3, in4, 0, in8, in6, 0, 0, 0, 0],
      bobot4 = [0, in9, 0, in8, 0, in7, in10, in14, in15, 0],
      bobot5 = [0, 0, in5, in6, in7, 0, in11, 0, 0, 0],
      bobot6 = [0, 0, 0, 0, in10, in11, 0, in12, 0, in13],
      bobot7 = [0, 0, 0, 0, in14, 0, in12, 0, in16, in17],
      bobot8 = [0, 0, 0, 0, in15, 0, 0, in16, 0, in18],
      bobot9 = [0, 0, 0, 0, 0, 0, in13, in17, in18, 0];
  var graf5 = [bobot0,bobot1,bobot2,bobot3,bobot4,bobot5,bobot6,bobot7,bobot8,bobot9];

  var matrix0 = [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      matrix1 = [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      matrix2 = [1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      matrix3 = [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      matrix4 = [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
      matrix5 = [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
      matrix6 = [0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
      matrix7 = [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
      matrix8 = [0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
      matrix9 = [0, 0, 0, 0, 0, 0, 1, 1, 1, 0];
  var matrixKetetanggaan5 = [matrix0,matrix1,matrix2,matrix3,matrix4,matrix5,matrix6,matrix7,matrix8,matrix9];


  var statusNode5=[false, false, false, false, false, false, false, false, false, false];

  dijkstra(graf5, matrixKetetanggaan5, matrixStatus5, statusNode5, resHasil5,tempE);
  has[1]=tempE[0][1];
  has[2]=tempE[0][2];
  statHas[0]=true;
  document.getElementById('hasil2').value=has[1];
  document.getElementById('hasil3').value=has[2];
  var x3 = document.getElementById("tabelGraf1").rows[2].cells;
  x3[1].innerHTML = has[2];
  var x2 = document.getElementById("tabelGraf1").rows[1].cells;
  x2[1].innerHTML = has[1];

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
    if((has[4]>=tempE[1][4])&&(tempE[1][4]!=0)){
      has[4]=tempE[1][4];
      //cn[2]=has[2];
    }
    if((has[3]>=tempE[1][3])&&(tempE[1][3]!=0)){
      has[3]=tempE[1][3];
      //cn[4]=has[4];
    }
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil4').value=has[3];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
    //alert(has[5]);
    if((has[5]>=tempE[2][5])&&(tempE[2][5]!=0)){
      has[5]=tempE[2][5];
      //cn[2]=has[2];
    }

    if((has[3]>=tempE[2][3])&&(tempE[2][3]!=0)){
      has[3]=tempE[2][3];
      //cn[4]=has[4];
    }
    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil4').value=has[3];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
   //alert(has[3]);
  if(va==has[3]){
    playBenar();
    statHas[3]=true;
    document.getElementById('node4').style.fill="green";
    if((has[1]>=tempE[3][1])&&(tempE[3][1]!=0)){
      has[1]=tempE[3][1];
      //cn[2]=has[2];
    }
    if((has[2]>=tempE[3][2])&&(tempE[3][2]!=0)){
      has[2]=tempE[3][2];
      //cn[4]=has[4];
    }
    if((has[4]>=tempE[3][4])&&(tempE[3][4]!=0)){
      has[4]=tempE[3][4];
      //cn[2]=has[2];
    }
    if((has[5]>=tempE[3][5])&&(tempE[3][5]!=0)){
      has[5]=tempE[3][5];
      //cn[4]=has[4];
    }
    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil6').value=has[5];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
    if((has[1]>=tempE[4][1])&&(tempE[4][1]!=0)){
      has[1]=tempE[4][1];
      //cn[2]=has[2];
    }
    if((has[3]>=tempE[4][3])&&(tempE[4][3]!=0)){
      has[3]=tempE[4][3];
      //cn[4]=has[4];
    }
    if((has[5]>=tempE[4][5])&&(tempE[4][5]!=0)){
      has[5]=tempE[4][5];
      //cn[2]=has[2];
    }
    if((has[6]>=tempE[4][6])&&(tempE[4][6]!=0)){
      has[6]=tempE[4][6];
      //cn[4]=has[4];
    }
    if((has[7]>=tempE[4][7])&&(tempE[4][7]!=0)){
      has[7]=tempE[4][7];
      //cn[4]=has[4];
    }
    if((has[8]>=tempE[4][8])&&(tempE[4][8]!=0)){
      has[8]=tempE[4][8];
      //cn[2]=has[2];
    }

    document.getElementById('hasil2').value=has[1];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil7').value=has[6];
    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil8').value=has[7];
    document.getElementById('hasil9').value=has[8];
    var x2 = document.getElementById("tabelGraf1").rows[1].cells;
    x2[1].innerHTML = has[1];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x9 = document.getElementById("tabelGraf1").rows[8].cells;
    x9[1].innerHTML = has[8];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
    if((has[2]>=tempE[5][2])&&(tempE[5][2]!=0)){
      has[2]=tempE[5][2];
      //cn[2]=has[2];
    }
    if((has[3]>=tempE[5][3])&&(tempE[5][3]!=0)){
      has[3]=tempE[5][3];
      //cn[4]=has[4];
    }
    if((has[4]>=tempE[5][4])&&(tempE[5][4]!=0)){
      has[4]=tempE[5][4];
      //cn[2]=has[2];
    }
    if((has[6]>=tempE[5][6])&&(tempE[5][6]!=0)){
      has[6]=tempE[5][6];
      //cn[4]=has[4];
    }

    document.getElementById('hasil3').value=has[2];
    document.getElementById('hasil4').value=has[3];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil7').value=has[6];
    var x3 = document.getElementById("tabelGraf1").rows[2].cells;
    x3[1].innerHTML = has[2];
    var x4 = document.getElementById("tabelGraf1").rows[3].cells;
    x4[1].innerHTML = has[3];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
    if((has[5]>=tempE[6][5])&&(tempE[6][5]!=0)){
      has[5]=tempE[6][5];
      //cn[2]=has[2];
    }
    if((has[4]>=tempE[6][4])&&(tempE[6][4]!=0)){
      has[4]=tempE[6][4];
      //cn[4]=has[4];
    }
    if((has[7]>=tempE[6][7])&&(tempE[6][7]!=0)){
      has[7]=tempE[6][7];
      //cn[2]=has[2];
    }
    if((has[9]>=tempE[6][9])&&(tempE[6][9]!=0)){
      has[9]=tempE[6][9];
      //cn[4]=has[4];
    }

    document.getElementById('hasil6').value=has[5];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil8').value=has[7];
    document.getElementById('hasil10').value=has[9];
    var x6 = document.getElementById("tabelGraf1").rows[5].cells;
    x6[1].innerHTML = has[5];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x10 = document.getElementById("tabelGraf1").rows[9].cells;
    x10[1].innerHTML = has[9];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
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
    if((has[4]>=tempE[7][4])&&(tempE[7][4]!=0)){
      has[4]=tempE[7][4];
      //cn[2]=has[2];
    }
    if((has[6]>=tempE[7][6])&&(tempE[7][6]!=0)){
      has[6]=tempE[7][6];
      //cn[4]=has[4];
    }
    if((has[8]>=tempE[7][8])&&(tempE[7][8]!=0)){
      has[8]=tempE[7][8];
      //cn[2]=has[2];
    }
    if((has[9]>=tempE[7][9])&&(tempE[7][9]!=0)){
      has[9]=tempE[7][9];
      //cn[4]=has[4];
    }

    document.getElementById('hasil7').value=has[6];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil9').value=has[8];
    document.getElementById('hasil10').value=has[9];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x9 = document.getElementById("tabelGraf1").rows[8].cells;
    x9[1].innerHTML = has[8];
    var x10 = document.getElementById("tabelGraf1").rows[9].cells;
    x10[1].innerHTML = has[9];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes9(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[8]){
    playBenar();
    statHas[8]=true;
    document.getElementById('node9').style.fill="green";
    if((has[4]>=tempE[8][4])&&(tempE[8][4]!=0)){
      has[4]=tempE[8][4];
      //cn[2]=has[2];
    }
    if((has[7]>=tempE[8][7])&&(tempE[8][7]!=0)){
      has[7]=tempE[8][7];
      //cn[4]=has[4];
    }
    if((has[9]>=tempE[8][9])&&(tempE[8][9]!=0)){
      has[9]=tempE[8][9];
      //cn[4]=has[4];
    }

    document.getElementById('hasil8').value=has[7];
    document.getElementById('hasil5').value=has[4];
    document.getElementById('hasil10').value=has[9];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x5 = document.getElementById("tabelGraf1").rows[4].cells;
    x5[1].innerHTML = has[4];
    var x10 = document.getElementById("tabelGraf1").rows[9].cells;
    x10[1].innerHTML = has[9];
    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
function panggilRes10(){
  if (statHas[0]==true) {
  var va = Number.MAX_SAFE_INTEGER;
  for (var g = 0; g < has.length; g++) {
      if ((has[g] < va)&&(statHas[g]==false)) {
        va = has[g];

      }
   }
  if(va==has[9]){
    playBenar();
    statHas[9]=true;
    document.getElementById('node10').style.fill="green";
    if((has[6]>=tempE[9][6])&&(tempE[9][6]!=0)){
      has[6]=tempE[9][6];
      //cn[2]=has[2];
    }
    if((has[7]>=tempE[9][7])&&(tempE[9][7]!=0)){
      has[7]=tempE[9][7];
      //cn[4]=has[4];
    }
    if((has[8]>=tempE[9][8])&&(tempE[9][8]!=0)){
      has[8]=tempE[9][8];
      //cn[4]=has[4];
    }

    document.getElementById('hasil8').value=has[7];
    document.getElementById('hasil7').value=has[6];
    document.getElementById('hasil9').value=has[8];
    var x8 = document.getElementById("tabelGraf1").rows[7].cells;
    x8[1].innerHTML = has[7];
    var x7 = document.getElementById("tabelGraf1").rows[6].cells;
    x7[1].innerHTML = has[6];
    var x9 = document.getElementById("tabelGraf1").rows[8].cells;
    x9[1].innerHTML = has[8];

    cekHasilAkhir(statHas,tempE,matrixStatus5,resHasil5);
  }
  else{
    playSalah();
  }
}
else{
  alert("pilih node start dahulu");
}
}
