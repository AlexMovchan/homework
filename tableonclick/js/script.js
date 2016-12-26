var buttons = document.getElementsByTagName('button');

function reset(){
    var tableData = document.getElementsByTagName('td');
    for(var i = 0; i< tableData.length; i++){
        tableData[i].style.backgroundColor = 'white';
    }
}

function paintTd(parametr){
    reset();
    var parentData = parametr.parentNode;
    
    var next = parentData.nextSibling.style.backgroundColor = 'red';
    if(parentData.previousSibling != null){
        parentData.previousSibling.style.backgroundColor = 'red';
    }
}
buttons[0].onclick = function(){
    var tableData = document.getElementsByTagName('td');
    for(var i = 0; i< tableData.length; i++){
        tableData[i].style.backgroundColor = 'red';
    }
}

buttons[1].onclick = function(){
    paintTd(buttons[1]);
}

buttons[2].onclick = function(){
    paintTd(buttons[2]);
}

buttons[3].onclick = function(){
    paintTd(buttons[3]);
}

buttons[4].onclick = function(){
    paintTd(buttons[4]);
}

buttons[5].onclick = function(){
   paintTd(buttons[5]);
}

buttons[6].onclick = function(){
    reset();
}

var grad = 0;
buttons[7].onclick = function(){
    grad += 90;
    var picture = document.getElementById('picture');
    picture.setAttribute('style', 'transform: rotate(' + grad + 'deg); transition: 2s;'); 
}

buttons[8].onclick = function(){
    grad += 180;
    var picture = document.getElementById('picture');
    picture.setAttribute('style', 'transform: rotate(' + grad + 'deg); transition: 2s;'); 
}
