// ----------------- first 
/*
var first = 5;
var second = 'alex'
var third = true;
var fourth = [1, 'al', true];

var type1 = typeof(first);
var type2 = typeof(second);
var type3 = typeof(third);
var type4 = typeof(fourth);


var answer = prompt('Insert a type of variables you want to see');

switch(answer){
    case 'first' :
        alert(type1);
        break;
    case 'second' :
        alert(type2);
        break;
    case 'third':
        alert(type3);
        break;
    case 'fourth':
        alert(type4);
        break;
    default:
        alert("I don't know this variable");
        break;
}*/

// -------------------second

/*var arr = new Array(10);

for(var z = 0; z < arr.length; z++){
    arr[z] = new Array(10);
};

for(var i = 0; i< arr.length; i++ ){
    for(var b = 0; b <= i; b++){
            arr[i][b] = '0';
        }
    }

for(var i = 0; i< arr.length; i++ ){
    for(var b = 0; b <= arr.length; b++){
            if(b > i){
                arr[i][b] = '1';
            }
        }
    }

for(var i = 0; i<arr.length; i++){
    for(var b = 0; b < arr.length; b++){
        document.write(arr[i][b]);
    };
    document.write('<br>');
};*/




// ----------- Third


function calc(fun, a, b){
    function plus(a,b){
        return(a+b)
    };
    function minus(a,b){
        return(a-b)
    };
    function multipl(a,b){
        return(a*b)
    };
    function devision(a,b){
        return(a/b)
    };
}

document.write(calc(plus, 4, 6))




// ------------------ Fourth

/*function Car(){
        this.climatControlOff = function(){
            this.climatControl = false;
            }
        this.displayChange = function(){
            this.display = '16';
            }
        this.toString = function(){
            return this.name;
        }
        this.valueOf = function(){
            return weight;
        }
};
    

function Mers(icon, name, model){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.climatControl = true;
        this.display = '14';

};

function Shkoda(icon, name, model, color){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.color = color;
        this.weight = weight;
        this.climatControl = true;
        this.display = '15';
};

function Fiat(icon, name, model, weight){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.climatControl = true;
        this.display = '13';
};


var Car1 = new Car();

Mers.prototype = Car1;
Shkoda.prototype = Car1;
Fiat.prototype = Car1;

var Mers1 = new Mers('<img src="img/Mers1.jpg" width="300px", height="200px">', 'Mers1', 'M33P', '3000'); 

var Shkoda1 = new Shkoda('<img src="img/Shkoda1.jpeg" width="300px", height="200px">', 'Shkoda1', 'R34', 'red', '2500'); 
 
var Fiat1 = new Fiat('<img src="img/Fiat1.jpg" width="300px", height="200px">', 'Fiat1', 'modelA', '2000');


function showMers(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center"><tbody>');
    for(q in Mers1){
        if(q == 'climatControlOff'){
            continue;
        }else if (q == 'displayChange'){
            continue;
        }else {
            document.write('<tr><td>' + q + '</td><td>' + Mers1[q] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}

function showShkoda(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(e in Shkoda1){
        if(e == 'climatControlOff'){
            continue;
        }else if (e == 'displayChange'){
           continue;
        }else {
            document.write('<tr><td>' + e + '</td><td>' + Shkoda1[e] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}


function showFiat(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(t in Fiat1){
        if(t == 'climatControlOff'){
            continue;
        }else if (t == 'displayChange'){
            continue;
        }else {
            document.write('<tr><td>' + t + '</td><td>' + Fiat1[t] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}

function showAllCars() {
    document.write('<div style="display:flex; justify-content:center; flex-flow: row wrap">');
    showMers();
    showShkoda();
    showFiat();
     document.write('<div>')
}


showAllCars();*/

