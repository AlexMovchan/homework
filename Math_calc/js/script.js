window.onload= function() {
        
var op = {
    plus: function(a,b){return(a+b)},
    minus: function(a,b){return(a-b)},
    inc: function(a){return(++a)},
    dec: function(a){return(--a)},
    multipl: function(a,b){return(a*b)},
    devision:function(a,b){return(a/b)},
    square: function(a){return(a*a)},
    root: function(a){return(Math.sqrt(a))}
};

    document.write(op.root(9));
    
}
    
