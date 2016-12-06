window.onload= function() {
    
    function Notebook(icon, mark, model, RAM, CPU){
        this.icon = icon;
        this.mark = mark;
        this.model = model;
        this.RAM = {
            first: '1024',
            second: '2048',
            third: '4096'
        };
        this.CPU = {
            first: 'i3', 
            second:'i5'
        };
        this.touchpad = true;
        function touckpadOff(){
            this.touchpad = false;
        } 
    }
 
    
    var Acer = new Notebook('<img src="img/acer.png" width="300px" height="200px">', 'Acer', 'Aspire One');
    var Asus = new Notebook('<img src="img/asus.png" width="300px" height="200px">', 'Asus', 'x540la');
    var HP = new Notebook('<img src="img/hp.png" width="300px" height="200px">', 'HP', 'Pavillion');
    
    function showNotebook(){
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        for(var p in Acer){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + Acer[p] + '</td></tr>');
            }else if(p == 'touchpad' && Acer['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && Acer['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in Acer.RAM){
                    document.write('<option>' + Acer.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in Acer.CPU){
                    document.write('<option>' + Acer.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + Acer[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
        
        document.write('<br>')
        
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        for(var p in Asus){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + Asus[p] + '</td></tr>');
            }else if(p == 'touchpad' && Asus['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && Asus['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in Asus.RAM){
                    document.write('<option>' + Asus.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in Asus.CPU){
                    document.write('<option>' + Asus.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + Asus[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
        
        document.write('<br>')
        
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        for(var p in HP){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + HP[p] + '</td></tr>');
            }else if(p == 'touchpad' && HP['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && HP['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in HP.RAM){
                    document.write('<option>' + HP.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in HP.CPU){
                    document.write('<option>' + HP.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + HP[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
    }
    
   showNotebook();
    
    
    
    
    
    
    
}