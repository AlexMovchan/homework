// ----------------- first ---------------------------------
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

// -------------------second------------------------------

/*
var arr = new Array(10);

for(var z = 0; z < arr.length; z++){
    arr[z] = new Array(10);
};

for(var i = 0; i< arr.length; i++ ){
    for(var b = 0; b <= arr.length; b++){
        if(i == b) {
            arr[i][b] = '1';
        }else{
            arr[i][b] = '0';
        }
    }
}

for(var i = 0; i<arr.length; i++){
    for(var b = 0; b < arr.length; b++){
        document.write(arr[i][b]);
    };
    document.write('<br>');
};
*/




// ----------- Third-------------------------------------


/*
function rec(counter){
    counter --
    
    document.write('<div style="width:' + counter + '00px; float:left; height: 600px; border: solid black"></div> ')
    if(counter != 0){
        rec(counter);
    }
    
    document.write('<div style="width:' + counter + '00px; float:left; height: 600px; border: solid black"></div> ')
}

rec(5);
*/




// ------------------ Fourth -------------------------------------

/*function Airplane(){
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
    

function Boeing(icon, name, model, weight){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.climatControl = true;
        this.display = '14';

};

function Destroyer(icon, name, model, color, weight){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.color = color;
        this.weight = weight;
        this.climatControl = true;
        this.display = '15';
};

function Plane(icon, name, model, weight){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.climatControl = true;
        this.display = '13';
};


var Airplane1 = new Airplane();

Boeing.prototype = Airplane1;
Destroyer.prototype = Airplane1;
Plane.prototype = Airplane1;

var Boeing1 = new Boeing('<img src="img/boing1.jpg" width="300px", height="200px">', 'Boeing1', 'AN 404', '13000'); 

var Destroyer1 = new Destroyer('<img src="img/destroyer.jpg" width="300px", height="200px">', 'Destroyer1', 'MI', 'red', '8500'); 
 
var Plane1 = new Plane('<img src="img/plane.jpg" width="300px", height="200px">', 'Plane1', 'AN 505', '10000');


function showBoeing(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center"><tbody>');
    for(q in Boeing1){
        if(q == 'climatControlOff' || q == 'displayChange' || q == 'toString' || q == 'valueOf'){
            continue;
        }else {
            document.write('<tr><td>' + q + '</td><td>' + Boeing1[q] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}

function showDestroyer(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(e in Destroyer1){
        if(e == 'climatControlOff' || e == 'displayChange' || e == 'toString' || e == 'valueOf'){
            continue;
        }else {
            document.write('<tr><td>' + e + '</td><td>' + Destroyer1[e] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}


function showPlane(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(t in Plane1){
        if(t == 'climatControlOff' || t == 'displayChange' || t == 'toString' || t == 'valueOf'){
            continue;
        }else {
            document.write('<tr><td>' + t + '</td><td>' + Plane1[t] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}

function showAllPlanes() {
    document.write('<div style="display:flex; justify-content:center; flex-flow: row wrap">');
    showBoeing();
    showDestroyer();
    showPlane();
     document.write('<div>')
}


showAllPlanes();*/

