window.onload = function(){
    
    var gradients = document.getElementsByTagName('stop'),
        text = document.getElementsByTagName('h1'),
        color = 0;
    
    setInterval(function(){
        color = color+1 %360;
        gradients[0].style.stopColor = "hsl(" + color + ",100%,50%)";
        text[0].style.color = "hsl(" + color + ",100%,50%)";
        text[1].style.color = "hsl(" + color + ",100%,50%)";
    }, 10)
    
    
}