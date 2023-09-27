let x = document.getElementsByTagName('span')[0]
console.log(x)
console.dir(x)

console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

first.innerHTML = "<i>hey I am italic</i>" 
first.outerHTML = "<div>hey</div>"

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent)

second.hidden = false
