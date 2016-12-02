window.onload = function(){
    var colorRainbow = ['blue', 'red', 'green', 'yellow', 'violette'];
    var randomColor = colorRainbow[parseInt(Math.random()*5)];

    for(var i = 3; i !== 0; i--){
        var answer = prompt('Guess the one color of rainbow. Blue, red, green, yellow, violette.').toLowerCase();
        if(answer == randomColor){
            alert('Gratulations! Your color is ' + randomColor);
            break;
        }

        else if(i == 1 && answer !== randomColor){
            document.write('You loose, restart page and try again.');
        }

        else if(answer !== randomColor){
            alert('You loose. Color is ' + randomColor + ' You have a ' + (i - 1) + ' chances');
        }
    } 
}