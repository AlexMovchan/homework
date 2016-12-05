window.onload= function() {
        
var op = {
    plus: function(a,b){return(a+b)},
    minus: function(a,b){return(a-b)},
    inc: function(a){return(++a)},
    dec: function(a){return(--a)}
};
    
var f = op['dec'];
    console.log(f(5));
    (function m(operation, first, second){
        return op[operation](first, second);})('plus', 2,3);

}
    
