
// This function is toggling the visibility of certain elements on a webpage related to soccer.

var btnSoccer = document.getElementById("btnSoccer");
var btnMotoring = document.getElementById("btnMotoring");

function showSoccer() {
    window.location.href = "soccer.html"
}

//This function is toggling the visibility of certain elements on a webpage related to motoring.
function showMotoring() {
    window.location.href = "motoring.html";
}

btnSoccer.addEventListener("click", showSoccer);
btnMotoring.addEventListener("click", showMotoring)

    document.getElementById('favoriteButton').addEventListener('click', function() {
      
      var favorite = localStorage.getItem ("favorites")
  if (favorite=="soccer"){
    showSoccer()
  }else if (favorite=="motoring"){
    showMotoring()
  }
      

      
    });
