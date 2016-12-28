var counter = 0;
var btn = document.getElementById('btn');
var timer;

btn.onclick = function(){
    timer = setInterval(paddingGrow, 100);
}


var circle = document.getElementById('circle');
function paddingGrow() {
    counter += 10;
    circle.style.padding = counter + 'px';
    if(counter == 200) {
        clearInterval(timer);
        var answer = confirm('Сдуть шар?');
        if(answer == true){
            var timer2 = setInterval(function(){
                counter -= 10;
                circle.style.padding = counter + 'px';
                if(counter == 0) {
                    clearInterval(timer2);
                }
            }, 100);
        }
    }
    
}

function counterDown(){
    circle.style.padding = counter + 'px';
    counter -= 10;
}