var button = document.createElement('div')
button.id = "top_bouton"

var a = document.createElement('a')
a.href = "#top"
button.appendChild(a)

var img = document.createElement('img')
img.src = "img/top_bouton.svg"
a.appendChild(img)

document.body.appendChild(button)