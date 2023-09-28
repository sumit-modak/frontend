// returns elements by the given tagname
console.log(document.getElementsByTagName("a"))

// returns elements by the given css class
console.log(document.getElementsByClassName("container")) 

// returns elements by the given name attribute 
console.log(document.getElementsByName("search"))

// Change the card title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"
console.log(ctitle)

// returns all the elements inside an element matching the given css selector
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

// returns the first element for the given css selector (more efficient method)
document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.querySelector(".card").getElementsByTagName("a"))
