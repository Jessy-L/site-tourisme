
var like = false;
var nblike = 95;
var angle = 0;

var like_user = document.getElementById('pourcentage');
var like_button = document.getElementById('pouce')
like_button.addEventListener("click", function(){

    if(like == false){
        angle += 540;
        like_button.style.transform = "rotate(" + angle +"deg)"
        nblike += 1
        like_user.innerText=  nblike + "%";
        like = true;
    }else{
        angle -= 540;
        like_button.style.transform = "rotate(" + angle +"deg)"
        nblike -= 1
        like_user.innerText=  nblike + "%";
        like = false;
    }
});

