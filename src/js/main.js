// prompt("whats up")

function burgerDisplay() {
    let x = document.getElementById("burgerMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function burgerClose() {
      let x = document.getElementById("burgerMenu");
      if(x.style.display=== "none"){
          x.style.display = "block";
      }else {
          x.style.display = "none";
      }
  }

  //  function mediaQueriesBur(x) {
//    let x= document.getElementById("burgerMenu")
//    if (x.matches) { 
//      document.burgerMenu.style.display="none";
//    } else {
//      document.burgerMenu.style.display="display";
//    }
//  }
//  var x = window.matchMedia("(max-width: 1000px)")
//  mediaQueriesBur();
//  x.addListener(mediaQueriesBur)