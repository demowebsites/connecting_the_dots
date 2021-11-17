var countDownDate = new Date("NOV 27, 2021 05:00:00").getTime();
var day=document.getElementById("day");
var hr=document.getElementById("hr");
var min=document.getElementById("min");
var sec=document.getElementById("sec");

var myfunc = setInterval(function() {
    // code goes here
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    day.innerHTML=days;
    hr.innerHTML=hours;
    min.innerHTML=minutes;
    sec.innerHTML=seconds;
    
}, 1000)


const btnscrolltotop=document.querySelector('#btnscrolltotop');

btnscrolltotop.addEventListener('click',function(){
    window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"

    });
})
