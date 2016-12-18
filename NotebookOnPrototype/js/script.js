
function Car(name){
        this.climatControlOff = function(){
            this.climatControl = false;
            }
        this.displayChange = function(){
            this.display = '16';
            }
};
    

function Mers(icon, name, model){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.climatControl = true;
        this.display = '14';

};

function Shkoda(icon, name, model, color){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.color = color;
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

var Mers1 = new Asus('<img src="img/Mers1.jpg" width="300px", height="200px">', 'Mers1', 'M33P'); 

var Shkoda1 = new Acer('<img src="img/Shkoda1.jpg" width="300px", height="200px">', 'Shkoda1', 'R34', 'red'); 
 
var Fiat1 = new Lenovo('<img src="img/Fiat1.jpg" width="300px", height="200px">', 'Fiat1', 'modelA', '1kg');


function showMers(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center"><tbody>');
    for(q in Mers1){
        if(q == 'climatControlOff'){
            document.write('<tr><td>' + q + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (q == 'displayChange'){
            document.write('<tr><td>' + q + '</td><td>This function can change the display size</td></tr>')
        }else {
            document.write('<tr><td>' + q + '</td><td>' + Mers1[q] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
    
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');

    document.write('</tbody></table>');
}

function showShkoda(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(e in Shkoda1){
        if(e == 'climatControlOff'){
            document.write('<tr><td>' + e + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (e == 'displayChange'){
            document.write('<tr><td>' + e + '</td><td>This function can change the display size</td></tr>')
        }else {
            document.write('<tr><td>' + e + '</td><td>' + Shkoda1[e] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
    
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
     
    document.write('</tbody></table>');
}


function showFiat(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(t in Fiat1){
        if(t == 'climatControlOff'){
            document.write('<tr><td>' + t + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (t == 'displayChange'){
            document.write('<tr><td>' + t + '</td><td>This function can change the display size</td></tr>')
        }else {
            document.write('<tr><td>' + t + '</td><td>' + Fiat1[t] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
        

function showAllCars() {
    document.write('<div style="display:flex; justify-content:center; flex-flow: row wrap">');
    showMers1();
    showShkoda1();
    showFiat1();
     document.write('<div>')
}


showAllCars();
     
