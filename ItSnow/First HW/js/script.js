var btnUp = document.getElementById('btnUp');
var btnLeft = document.getElementById('btnLeft');
var btnDown = document.getElementById('btnDown');
var btnRight = document.getElementById('btnRight');

var circle = document.getElementById('circle');
var rect = document.getElementById('rect');

var up = 0,
    left = 0;

btnUp.onclick = function(){
    up -= 50;
    circle.style.top = up + 'px'; 
    positionStatement();
}

btnLeft.onclick = function(){
    left -= 50;
    circle.style.left = left + 'px'; 
    positionStatement();
}

btnDown.onclick = function(){
    up += 50;
    circle.style.top = up + 'px'; 
    positionStatement();
}

btnRight.onclick = function(){
    left += 50;
    circle.style.left = left + 'px';
    positionStatement();
}

function snow(left) {
    this.snow = document.createElement('img');
    this.snow.setAttribute('src', 'img/1.png')
    this.snow.style.position = 'absolute';
    this.snow.className = 'snow';
    this.snow.style.width = '25px';
    this.snow.style.height = '25px';
    this.snow.style.left = left;
    this.snow.style.visibility = 'hidden';
    if(this.snow.parentNode != document.body){
        document.body.appendChild(this.snow);
    }
}
var snowArr1 = ['snow1','snow2','snow3','snow4','snow5','snow6','snow7','snow8','snow9','snow10','snow11', 'snow12','snow13','snow14','snow15','snow16','snow17','snow18','snow19','snow20', 'snow21']

var distanceCounter = 10;

for(var i = 0; i < snowArr1.length; i++){
    snowArr1[i] = new snow(distanceCounter + 'px');
    distanceCounter += 80;
}


var timer1;
function positionStatement() {
    if(up == 400 & left == 400) {
        timer1 = setInterval(animate, 100);
    }else {
        clearInterval(timer1);
    }
}

var counter = 0;
function animate(){
    var snowArr = document.getElementsByClassName('snow');
    for(var i = 0; i < snowArr.length; i++){
        snowArr[i].style.top = counter + 'px';
        snowArr[i].style.visibility = 'visible';        
    }
    counter += 10;
    if(counter == 800) {
        counter = 0;
    }
}

