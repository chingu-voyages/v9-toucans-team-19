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


  // TOGGLE modal section
  let toggle  = document.getElementById("modal-circle");
let content = document.getElementById("modal-card-section");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});


// toggle icons on button

$(document).ready(function(){
  $('#modal-circle').click(function(){
    $('span').toggleClass('active')
  })
})


// fade in of cards
$('#modal-circle').on('click',function(){
  if($('.bottom-card-top').css('opacity')==0){
    $('.bottom-card-top').css('opacity',1);
  }
  else{
    $('.bottom-card-top').css('opacity',0);
  }
});

// middle-card
$('#modal-circle').on('click',function(){
  if($('.bottom-card-middle').css('opacity')==0){
    $('.bottom-card-middle').css('opacity',1);
  }
  else{
    $('.bottom-card-middle').css('opacity',0);
  }
});


// bottom card
$('#modal-circle').on('click',function(){
  if($('.bottom-card-bottom').css('opacity')==0){
    $('.bottom-card-bottom').css('opacity',1);
  }
  else{
    $('.bottom-card-bottom').css('opacity',0);
  }
});



// $(document).ready(function(){
//   $("#modal-circle").click(function(){
//     $(".card-modal").slideUp();
//   });
// });

// $('.card-title').show(0).delay(5000).hide(0);

// $(document).ready(function(){
//   $("#modal-circle").click(function(){
//     $(".card-modal-img").slideUp("slow");
//   });
// });





// $('button').click(function(){
//   $(this).find('i').toggleClass('fas fa comment fas fa-times')
// });

// $('button').on('click', fav);

// function fav(e) {
//   $(this).find('i').toggleClass('fas fa-times fas fa-comment');
// }






//   let toggle  = document.getElementById("modal-circle2");
// let content = document.getElementById("modal-card-section");

// toggle.addEventListener("click", function() {
//   content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";


// 

// function myFunction() {
//   var element = document.getElementById("try");
//   element.classList.toggle(" fa-times");
// }
// function fontToggle() {
//   let x = document.getElementById("times");
//   if(x.style.display=== "none"){
//       x.style.display = "block";
//   }else {
//       x.style.display = "none";
//   }
// };
// function fontToggle() {
//   let x = document.getElementById("modal-circles2");
//   if(x.style.display=== "none"){
//       x.style.display = "block";
//   }else {
//       x.style.display = "none";
//   }
// };








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

// toggle the font awesome icons

// $(document).ready(function() {
//   $('.times').click(function() {
//     $('i')
//     .toggleClass('fas fa-comment')
//     .toggleClass('fas fa-times');
//   });
// }); 





// document.addEventListener('DOMContentLoaded', function () {
//   $('button').on('click', function () {
//     $(this)
//       .find('[data-fa-i2svg]')
//       .toggleClass('fas fa-comment')
//       .toggleClass('fas fa times');
//   });
// });
// $('#modal-circle').click(function(){
//   $(this).find('i').toggleClass('fas fa-times, fas fa-comment')
  
// });





