window.onload= function() {

var num1,
    num2,
    operation;
    
    function ask(){
        num1 = +prompt('Insert a first number');
        num2 = +prompt('Insert a second number');
        operation = prompt('Insert a math operation. Add, Sub, Mult or Dev?').toLowerCase();
        
        switch(operation){
            case 'add':
                alert(num1+num2);
                break;
            case 'sub':
                alert(num1-num2);
                break;
            case 'mult':
                alert(num1*num2);
                break;
            case 'dev':
                alert(num1/num2);
                break;
            default:
                alert('You insert wrong operation. Restart page and try again!');
                break;
        }
    }
    
    ask();
    
    
    
    
    
    
}