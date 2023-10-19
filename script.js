function myFunction() {
    alert ("page is under construction!");
  }
// function Privacy() {
//     alert ("Sorry, but you cannot view Smit Patel's social media profiles without their permission.");
//   }

  


function openNav() {
  document.getElementById("togglenav").style.left = "3%";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
}
function closeNav() {
  document.getElementById("togglenav").style.left = "-100%";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
  
}
function codeAddress() {
  document.getElementById("bounce").style.animation = "paused";
}
window.onload = codeAddress;

function Play()
      {
        var myAudio = document.getElementById("audioval");
        if(myAudio.paused) {
            myAudio.play();
            bounce.style.animation = "";
         
        }
        else {
           myAudio.pause();
           document.getElementById("bounce").style.animation = "paused";
        }
      }


