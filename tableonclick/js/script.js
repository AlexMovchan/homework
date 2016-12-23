var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');

function reset(){
    var tableData = document.getElementsByTagName('td');
    for(var i = 0; i< tableData.length; i++){
        tableData[i].style.backgroundColor = 'white';
    }
}


btn1.onclick = function(){
    reset();
    var parentData = btn1.parentNode;
    
    var next = parentData.nextSibling.style.backgroundColor = 'red';
    if(parentData.previousSibling != null){
        parentData.previousSibling.style.backgroundColor = 'red';
    }
}

btn2.onclick = function(){
    reset();
    var parentData = btn2.parentNode;
    
    var next = parentData.nextSibling.style.backgroundColor = 'red';
    var previous = parentData.previousSibling.style.backgroundColor = 'red';
}

btn3.onclick = function(){
    reset();
    var parentData = btn3.parentNode;
    
    var next = parentData.nextSibling.style.backgroundColor = 'red';
    var previous = parentData.previousSibling.style.backgroundColor = 'red';
}

btn4.onclick = function(){
    reset();
    var parentData = btn4.parentNode;
    
    var next = parentData.nextSibling.style.backgroundColor = 'red';
    var previous = parentData.previousSibling.style.backgroundColor = 'red';
}

btn5.onclick = function(){
    reset();
    var parentData = btn5.parentNode;
    
    var previous = parentData.previousSibling.style.backgroundColor = 'red';
    if(parentData.nextSibling != null){
        parentData.nextSibling.style.backgroundColor = 'red';   
    }
}







var btn = document.getElementById('btn');

btn.onclick = function(){
    var picture = document.getElementById('picture');
    picture.setAttribute('style', 'transform: rotate(90deg); transition: 2s;'); 
}