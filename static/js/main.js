(function() {
  document.querySelector(".photos-img-1").style.background = "url(../../img/andrew-neel-609844-unsplash.jpg) no-repeat center center%";


  var open = document.getElementById('openNav');
  var close = document.getElementById('closeNav');

  open.onclick = function () {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.height = "100%";
      }

  close.onclick = function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("myNav").style.height = "0%";
    }

})();
