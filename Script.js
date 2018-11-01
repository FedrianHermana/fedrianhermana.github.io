function modalAwal(){


  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var graf = document.getElementById('myGraf');
  var btn = document.getElementById('btnMulai');

  // When the user clicks the button, open the modal

  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  btn.onclick = function(){
    modal.style.display ="none";
    graf.style.display ="block";
  }

  }
  function pindah1()
    {
    var url = "../graf/graf0.html";
    window.location(url);
    }
