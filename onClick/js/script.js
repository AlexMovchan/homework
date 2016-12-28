var btn = document.getElementById('btn');

btn.onclick = function(){
    var tableRow = document.getElementById('tableRow')
    
    tableRow.innerHTML += '<td>Item</td>'
}




var btn2 = document.getElementById('btn2');

btn2.onclick = function(){
    var redColor = document.getElementsByClassName('redColor')
    
    for(i = 0 ; i < redColor.length; i++){
        redColor[i].style.color = 'red'    
    }
    
}




var imagesArr = ['<img src="img/1.jpg"', '<img src="img/2.jpg"', '<img src="img/3.jpg"', '<img src="img/4.jpg"'];
var btn3 = document.getElementById('btn3');

btn3.onclick = function(){
    var ul = document.getElementById('ul');
    
    for(i = 0 ; i < imagesArr.length; i++){
        ul.innerHTML += '<li>' +  imagesArr[i] + '</li>' ;  
    }
    
}




var btn4 = document.getElementById('btn4');

btn4.onclick = function(){
    
    var yourName = document.getElementsByName('name');
    
    var checkbox = document.getElementsByName('checkbox');

    var res = '';
    for(var i = 0; i< checkbox.length; i++){
        if(checkbox[i].checked == true){
            res+= checkbox[i].value + '-' + '' + checkbox[i].checked + '' + '\r\n'
        }
    }
        alert("Your name " + yourName[0].value+ '\r\n'+ 'You choose this value:' + '\r\n' + res);
}



