
var like = false;
var nblike = 95;

var like_user = document.getElementById('pourcentage');
var like_button = document.getElementById('pouce').addEventListener("click", function(){

    if(like == false){
        nblike += 1
        like_user.innerText=  nblike + "%";
        like = true;
    }else{
        nblike -= 1
        like_user.innerText=  nblike + "%";
        like = false;
    }
});

