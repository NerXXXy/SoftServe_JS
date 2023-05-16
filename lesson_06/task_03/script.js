const body = document.getElementsByTagName("body")
const main = document.createElement('main')
main.classList.add('mainClass', 'check','item')
const div = document.createElement('div')
div.setAttribute('id','myDiv')
const p = document.createElement('p')
p.textContent = 'first paragraph'

div.appendChild(p)
main.appendChild(div)
document.body.appendChild(main);
