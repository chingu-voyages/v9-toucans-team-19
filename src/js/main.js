// prompt("whats")

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