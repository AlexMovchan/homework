window.onload = function() {
    var span = document.getElementsByTagName('span');
    var form = document.forms[0],
        inputs = form.elements,
        isValid= true;
    
    inputs[0].addEventListener('keypress', myEventHandler, false);
    inputs[1].addEventListener('keypress', myEventHandler1, false);
    
    function myEventHandler(e){
        var keyCode = e.keyCode;
        if(keyCode < 97 || keyCode > 122){
            span[0].innerHTML = ' You can insert only english letters';
        }else {
            span[0].innerHTML = '';
        }
        
    }
    
    function myEventHandler1(e){
        var keyCode = e.keyCode;
        if(keyCode < 97 || keyCode > 122){
            span[1].innerHTML = ' You can insert only english letters';
        }else {
            span[1].innerHTML = '';
        }
        
    }
    
    document.forms[0].addEventListener("submit", function (e) {
        for(var i=0; i<(inputs.length - 1); i++){
           if (inputs[i].value.length == 0) {
                        isValid = false;
                    }

            }
            if (!isValid) {
                e.preventDefault();
                alert("You must complete all inputs");
        }
    })
    
    
}