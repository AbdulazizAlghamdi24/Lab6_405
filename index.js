const initLikes = 220;
const initDislikes =34

let likesCount = initLikes ;
let dislikesCount = initDislikes ;

let likeBtn = document.getElementById('like--btn');
let dislikeBtn = document.getElementById('dislike--btn');



likeBtn.innerText = "👍" + initLikes
dislikeBtn.innerText = "👎" + initDislikes


function doLike() {
  likesCount++;
  likeBtn.innerText = "👍 " + likesCount
  disableButtons();
  setCookie();
}

function doDislike() {
  dislikesCount++;
  dislikeBtn.innerText += "👎 " + dislikesCount;
  disableButtons();
  setCookie();

}


function disableButtons() {
  likeBtn.disabled = true;
  dislikeBtn.disabled = true;
}


function setCookie(){
  document.cookie = "voted=true; SameSite=Strict; Max-Age=" + 60;

}

window.onload = function(){
  if (document.cookie && document.cookie.indexOf("voted") > -1){
    disableButtons();
  }
}