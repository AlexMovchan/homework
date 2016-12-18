
    
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
       
    }
 
    Notebook.prototype.touckpadOff = function(){
        this.touchpad = false;
    }
    
     Notebook.prototype.toString = function(){
        for(p in Notebook){
            document.write(p + '<br>')
        }
    }
    
    
    var Acer = new Notebook('<img src="img/acer.png" width="300px" height="200px">', 'Acer', 'Aspire One');
    var Asus = new Notebook('<img src="img/asus.png" width="300px" height="200px">', 'Asus', 'x540la');
    var HP = new Notebook('<img src="img/hp.png" width="300px" height="200px">', 'HP', 'Pavillion');
    var Lenovo = new Notebook('<img src="img/lenovo.png" width="300px" height="200px">', 'Lenovo', 'HZ');
    var Mac = new Notebook('<img src="img/mac.png" width="300px" height="200px">', 'Mac', 'Apple');
    var Idea = new Notebook('<img src="img/idea.png" width="300px" height="200px">', 'Idea', 'HZ');
    
    
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
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
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
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
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
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + HP[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
       
        document.write('<br>')
        
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        for(var p in Lenovo){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + Lenovo[p] + '</td></tr>');
            }else if(p == 'touchpad' && Lenovo['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && Lenovo['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in Lenovo.RAM){
                    document.write('<option>' + Lenovo.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in Lenovo.CPU){
                    document.write('<option>' + Lenovo.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + Lenovo[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
        
        document.write('<br>')
        
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        for(var p in Mac){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + Mac[p] + '</td></tr>');
            }else if(p == 'touchpad' && Mac['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && Mac['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in Mac.RAM){
                    document.write('<option>' + Mac.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in Mac.CPU){
                    document.write('<option>' + Mac.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + Mac[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')
        
        document.write('<br>')
        
        document.write('<table width="700px" height="500px" border="1px" cellspacing="0" cellpadding="0" align="center"><tbody>')
        
        for(var p in Idea){
            if(p == 'icon'){
                document.write('<tr><td colspan="2" align="center">' + Idea[p] + '</td></tr>');
            }else if(p == 'touchpad' && Idea['touchpad'] == true){
                document.write('<tr><td>' + p + '</td><td>YES</td></tr>');
            }else if(p == 'touchpad' && Idea['touchpad'] == false){
                document.write('<tr><td>' + p + '</td><td>NO</td></tr>');
            }else if(p == 'RAM'){
                document.write('<tr><td>RAM</td><td><select>')
                for(r in Idea.RAM){
                    document.write('<option>' + Idea.RAM[r] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'CPU'){
                document.write('<tr><td>CPU</td><td><select>')
                for(c in Idea.CPU){
                    document.write('<option>' + Idea.CPU[c] + '</option>')
                }
                document.write('</select></td></tr>')
            }else if(p == 'touckpadOff'){
                document.write('<tr><td>' + p + '</td><td>You can change this property</td></tr>');
            }else{
                document.write('<tr><td width="200px">' + p + '</td><td>' + Idea[p] + '</td></tr>')
            }
        }
        document.write('</tbody></table>')

    }
    

    showNotebook();

    Acer.touckpadOff();

    setTimeout(function() { 
        document.getElementById('consult').innerHTML = '<div style="width:400px; height:400px; background-color:#d1d4d4; top: 200px;\
            left: 50%; margin-left: -200px; display: table; text-align: center; vertical-align: middle; position: fixed;">\
            <p style="display:table-cell; vertical-align: middle; font-size: 35px;">Can I help You?<button style="width: 200px; height: 40px;">Ok</button></p></div>';
        document.getElementById('bgcolor').innerHTML = '<div style="width:inherit; height:inherit; background-color:black; opacity: 0.7;">\
        Can I help You?</div>';
    }, 1000);

        
    
    
    
