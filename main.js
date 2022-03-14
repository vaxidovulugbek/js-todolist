let list = document.getElementById("list")
let inputs = document.querySelector("#input")
let btn = document.getElementById("button")
let from = document.querySelector("#formda")

from.addEventListener('submit', (e) => {
   e.preventDefault()

  let item = document.createElement('li')
  item.classList = "items"
  item.textContent = inputs.value

  let close = document.createElement('button')
  close.classList = "buttuon"
  close.textContent = "X"
  item.append(close)
  
  close.addEventListener("click", () =>{
    close.parentElement.remove()
  })
  
  list.append(item)
  inputs.value = ""
})



























