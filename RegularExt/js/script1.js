window.onload = function(){
			var timer = window.setTimeout(clear, 20000)
<<<<<<< HEAD
            var timer2 = window.setTimeout(addBtn, 3000)
		}

var advertising = document.getElementById('advertising');
=======
            var timer2 = window.setTimeout(addBtn, 5000)
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

>>>>>>> 7e0cc6c21e97f1aa7cd04a960fea2e12a0d5af6f

function clear(){
    advertising.style.display = 'none'
}

function addBtn(){
    var btn = document.createElement('button');
<<<<<<< HEAD
    btn.innerHTML = 'Close Tab';
=======
    btn.innerHTML = 'Х';
>>>>>>> 7e0cc6c21e97f1aa7cd04a960fea2e12a0d5af6f
    advertising.appendChild(btn);
    btnArr = document.getElementsByTagName('button');
    btnArr[0].onclick = function(){
        clear()
    }
}

