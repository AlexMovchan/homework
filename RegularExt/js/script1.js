window.onload = function(){
			var timer = window.setTimeout(clear, 20000)
            var timer2 = window.setTimeout(addBtn, 3000)
	
		}
            var timer3 = setInterval(count, 1000)

var i = 4;
var advertising = document.getElementById('advertising');
var counter = document.createElement('b')


function count(){
    counter.innerHTML = 'You can close at ' + i + 'second'
    advertising.appendChild(counter)
    i = i - 1
    if(i==-1){
        clearInterval(timer3);
        counter.innerHTML = ''
    }
}



function clear(){
    advertising.style.display = 'none'
}

function addBtn(){
    var btn = document.createElement('button');
    btn.innerHTML = 'Х';
    advertising.appendChild(btn);
    btnArr = document.getElementsByTagName('button');
    btnArr[0].onclick = function(){
        clear()
    }
}

