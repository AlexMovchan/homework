
function Notebook(name){
        this.touchpadOff = function(){
            this.touchpad = false;
            }
        this.displayChange = function(){
            this.display = '16';
            }
        this.wifiOff = function(){
            this.wifi = false;
            }
};
    

function Asus(icon, name, model){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.touchpad = true;
        this.display = '14';
        this.wifi = true;
};

function Acer(icon, name, model, color){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.color = color;
        this.touchpad = true;
        this.display = '15';
        this.wifi = true;
};

function Lenovo(icon, name, model, weight){
        this.icon = icon;
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.touchpad = true;
        this.display = '13';
        this.wifi = true;
};


var Notebook1 = new Notebook();

Asus.prototype = Notebook1;
Acer.prototype = Notebook1;
Lenovo.prototype = Notebook1;

var Asus1 = new Asus('<img src="img/asus.jpg" width="300px", height="200px">', 'Asus1', 'M33P'); 
var Asus2 = new Asus('<img src="img/asus2.png" width="300px", height="200px">', 'Asus2', '62JD'); 

var Acer1 = new Acer('<img src="img/acer.png" width="300px", height="200px">', 'Acer1', 'R34', 'red'); 
var Acer2 = new Acer('<img src="img/acer2.png" width="300px", height="200px">', 'Acer2', '30RT23', 'green'); 

var Lenovo1 = new Lenovo('<img src="img/lenovo.png" width="300px", height="200px">', 'Lenovo1', 'modelA', '1kg');
var Lenovo2 = new Lenovo('<img src="img/lenovo2.png" width="300px", height="200px">', 'Lenovo2', 'modelB', '1.8kg');


function showAsus(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center"><tbody>');
    for(q in Asus1){
        if(q == 'touchpadOff'){
            document.write('<tr><td>' + q + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (q == 'displayChange'){
            document.write('<tr><td>' + q + '</td><td>This function can change the display size</td></tr>')
        }else if(q == 'wifiOff'){
            document.write('<tr><td>' + q + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + q + '</td><td>' + Asus1[q] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
    
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
     for(w in Asus2){
        if(w == 'touchpadOff'){
            document.write('<tr><td>' + w + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (w == 'displayChange'){
            document.write('<tr><td>' + w + '</td><td>This function can change the display size</td></tr>')
        }else if(w == 'wifiOff'){
            document.write('<tr><td>' + w + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + w + '</td><td>' + Asus2[w] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}

function showAcer(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(e in Acer1){
        if(e == 'touchpadOff'){
            document.write('<tr><td>' + e + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (e == 'displayChange'){
            document.write('<tr><td>' + e + '</td><td>This function can change the display size</td></tr>')
        }else if(e == 'wifiOff'){
            document.write('<tr><td>' + e + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + e + '</td><td>' + Acer1[e] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
    
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
     for(r in Acer2){
        if(r == 'touchpadOff'){
            document.write('<tr><td>' + r + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (r == 'displayChange'){
            document.write('<tr><td>' + r + '</td><td>This function can change the display size</td></tr>')
        }else if(r == 'wifiOff'){
            document.write('<tr><td>' + r + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + r + '</td><td>' + Acer2[r] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}


function showLenovo(){
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
    for(t in Lenovo1){
        if(t == 'touchpadOff'){
            document.write('<tr><td>' + t + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (t == 'displayChange'){
            document.write('<tr><td>' + t + '</td><td>This function can change the display size</td></tr>')
        }else if(t == 'wifiOff'){
            document.write('<tr><td>' + t + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + t + '</td><td>' + Lenovo1[t] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
    
    document.write('<table border="1px" width="500px" style="margin:3px; text-align:center""><tbody>');
     for(y in Lenovo2){
        if(y == 'touchpadOff'){
            document.write('<tr><td>' + y + '</td><td>This function can change the touchpad value</td></tr>')
        }else if (y == 'displayChange'){
            document.write('<tr><td>' + y + '</td><td>This function can change the display size</td></tr>')
        }else if(y == 'wifiOff'){
            document.write('<tr><td>' + y + '</td><td>This function can change the wifi adapter</td></tr>')
        }else {
            document.write('<tr><td>' + y + '</td><td>' + Lenovo2[y] +'</td></tr>')
        }
    }
    document.write('</tbody></table>');
}
    

function showAllNotebooks() {
    document.write('<div style="display:flex; justify-content:center; flex-flow: row wrap">');
    showAsus();
    showAcer();
    showLenovo();
     document.write('<div>')
}

Lenovo2.displayChange();
Asus1.touchpadOff();
Acer2.wifiOff();
showAllNotebooks()
     
