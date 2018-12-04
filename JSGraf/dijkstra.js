
function dijkstra(matriksGraf, matriksKetenggaan, MatriksStatus, statusNode, resHasil, temp) {
    var i=0;
    while(statusNode.includes(false)) {
      statusNode[i]=true;


      for(var j = 0; j < matriksKetenggaan.length; j++) {
        if(matriksKetenggaan[i][j]==1){

          if(resHasil[j]>(resHasil[i]+matriksGraf[i][j])){
            resHasil[j]=resHasil[i]+matriksGraf[i][j];
            temp[i][j]=resHasil[i]+matriksGraf[i][j];
          }
        }
      }
      var idx = 0;
      var value = Number.MAX_SAFE_INTEGER;
      for (var g = 0; g < resHasil.length; g++) {
          if ((resHasil[g] < value)&&(statusNode[g])==false) {
            value = resHasil[g];
            idx = g;
          }
       }


      i=idx;

}
}

function cekHasilAkhir(hasilAkhir,temp,MatriksStatus,resHasil){
  if (!hasilAkhir.includes(false)) {
    alert("sudah selesai");
    playFinish();
    for (var s = 1; s < resHasil.length; s++) {
      for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp.length; j++) {
          if (resHasil[s]==temp[i][j]) {
          MatriksStatus[i][j]=1;
          //console.log(MatriksStatus);
          }
        }
      }
    }
    for (var b = 0; b < MatriksStatus.length; b++) {
      for (var n = 0; n < MatriksStatus.length; n++) {
        if (MatriksStatus[b][n]==1) {
          if (b>n) {
            var awal=n.toString();
            var akhir=b.toString();
          }
          else{
            var awal=b.toString();
            var akhir=n.toString();
          }
          var st=awal+akhir;
          //alert(st);
            document.getElementById(st).style.stroke="green";
        }
      }
    }
  }
}

function cekInput(arr) {

  for (var i = 0; i < arr.length; i++) {
    if ((isNaN(arr[i])) || (arr[i]<0)) {
      alert("Terdapat bobot yang kosong atau bernilai negatif");
      location.reload();
    }
  }
}
function playBenar(){
    var y = new Audio('benar.mp4');
    y.play();

}

function playSalah(){
    var y = new Audio('audio.MKV');
    y.play();

}
function playFinish(){
    var y = new Audio('finish.mp4');
    y.play();
}
