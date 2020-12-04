fetch("../asset/header_index.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("../asset/footer_index.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
});