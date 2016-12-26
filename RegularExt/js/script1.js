window.onload = function(){
			var timer = window.setTimeout(clear, 20000)
            var timer2 = window.setTimeout(addBtn, 3000)
		}

var advertising = document.getElementById('advertising');

function clear(){
    advertising.style.display = 'none'
}

function addBtn(){
    var btn = document.createElement('button');
    btn.innerHTML = 'Close Tab';
    advertising.appendChild(btn);
    btnArr = document.getElementsByTagName('button');
    btnArr[0].onclick = function(){
        clear()
    }
}

