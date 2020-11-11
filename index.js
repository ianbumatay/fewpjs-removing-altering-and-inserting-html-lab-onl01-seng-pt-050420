// Write your code here! 
let element = document.createElement('div') 

document.body.appendChild(element)  

let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul) 



// Remove DOM node "main"
document.getElementById("main").remove(); 

// create new Element <h1>
let newHeader = document.createElement("h1"); 

// set <h1> with atrribute "id" and id#name to "victory" 
newHeader.setAttribute("id", "victory"); 

// set  
newHeader.innerHTML = "Ian is the champion";