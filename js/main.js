
var all_page = [
    "Accueil",
    "Les lieux",
    "Formulaire",
]


var all_page_data = [
    "asset/accueil.html",
    "asset/page_des_lieux.html",
    "asset/formulaire.html",
]

var page_default = false

var nav = document.querySelector('nav')

for(i = 0; i < all_page.length; i++){
    var li = document.createElement('li')
    nav.appendChild(li)
    li.innerHTML = all_page[i]
    li.dataset.page = all_page_data[i]
    console.log(li.dataset = all_page[i])

    li.addEventListener('click', add_main)
}  


function add_main(){

    if(page_default == false){
        fetch( "asset/accueil.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("main").innerHTML = data;
        });
        page_default = true
        return page_default
    }else {
        fetch( String(this.dataset.page))
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("main").innerHTML = data;
        });
    }
}

add_main()