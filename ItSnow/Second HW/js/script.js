window.onload = function(){
    setInterval(rotate, 100);
    
    
    
}



var rotateCounter = 0;
var colorCounter = 0;
function rotate(){
    var circle = document.getElementById('circle');
    rotateCounter +=10;
    colorCounter +=10
    circle.style.transform = 'rotate(' + rotateCounter + 'deg)'
    circle.style.transformOrigin = '150% 150%'
    circle.style.backgroundColor = 'hsl(' + colorCounter + ', 100%, 50%)'
    if(colorCounter == 360){
        colorCounter = 0;
    }
}