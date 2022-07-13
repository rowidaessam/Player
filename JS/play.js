var imgArray = ["../Images/1.jpg", "../Images/2.jpg", "../Images/3.jpg", "../Images/4.jpg", "../Images/5.png", "../Images/6.jpg", "../Images/7.png", "../Images/8.jpeg", "../Images/9.png", "../Images/10.png"];
var i = 0;
var flag = 0;
function nextimg() {
    i++;
    if (i >= imgArray.length) i = 0;
    myImg.src= imgArray[i];
}
function endshow() {
    clearInterval(interval);
    play.disabled = false;
}
function previmg() {
    i--;
    if (i < 0) i = imgArray.length-1;
    myImg.src = imgArray[i];
}

function startshow() {
    flag = 1;
    interval= setInterval("nextimg()", 1000);
    play.disabled = true;
}