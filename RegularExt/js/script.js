var btn = document.getElementsByTagName('button');


btn[0].onclick = function(){
    var nameValueArr = document.getElementsByName('initials'),
        result = '',
        patternInitials = /[a-z]\b/,
        phone = document.getElementById('phone'),
        patternPhone = /\+38-\d{3}-\d{2}-\d{2}-\d{3}\b/;

// Loop for Name inputs
    for(var i = 0; i < nameValueArr.length; i++){
        if(patternInitials.test(nameValueArr[i].value) == true){
            result += nameValueArr[i].value + '\r\n';
        }else{
            alert('You insert wrong data ' + nameValueArr[i].value);
        };
    };
        
// Statement for numver insert
    if(patternPhone.test(phone.value) == true){
            result += phone.value + '\r\n';
        }else{
            alert('You insert wrong data ' + phone.value);
        };
    
    alert('Yor data: ' + '\r\n' + result);
};

btn[1].onclick = function() {
    document.location = "1.html";
}

btn[2].onclick = function(){
    window.open('1.html', 'New Tab', 'width=400, height=400, status=yes, resistable=no')
}
