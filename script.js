"use strict"

let sandwich = document.querySelector('.active')
sandwich.addEventListener('click', function(e){
  e.preventDefault()

  let menu = document.getElementById("myTopnav");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
})

