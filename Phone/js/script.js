//window.onload= function() {
        
  function Phone(icon, model, color, RAM, camera, photoof) {
      this.icon = icon;
      this.model = model;
      this.color = color;
      this.RAM = RAM;
      this.camera = true;
      this.photoof = function(){
          this.camera = false;
      };
      this.ring = function(){
          alert('ring_ring_ring');
      }
  } 

  

var Nokia = new Phone('<img src="img/nokia.jpg" width="80px" height="100px">', '3310', 'white', '1Gb');
var Apple = new Phone('<img src="img/apple.jpg" width="80px" height="100px">', 'iphone5', 'black', '2Gb', true);
var Samsung = new Phone('<img src="img/samsung.png" width="80px" height="100px">', 'galaxyS', 'white', '2Gb', true);


function showPhone(){
    document.write('<table width="700px" height="500px" border>')
    for(var p in Nokia){
        if(p == 'ring'){
            document.write('<td>Yes</td>')
        }else if(p == 'camera'  && Nokia['camera'] == true){
            document.write('<td>Yes</td>)
        }
    }
}










    
/*document.getElementById('first').innerHTML = '<img src="img/nokia.jpg" width="80px" height="100px"><br>' + Nokia.model + '<br>' + Nokia.color + '<br>' + Nokia.RAM + '<br>' + Nokia.camera;
document.getElementById('second').innerHTML = '<img src="img/apple.jpg" width="80px" height="100px"><br>' + Apple.model + '<br>' + Apple.color + '<br>' + Apple.RAM + '<br>' + Apple.camera;
document.getElementById('third').innerHTML = '<img src="img/samsung.png" width="80px" height="100px"><br>' + Samsung.model + '<br>' + Samsung.color + '<br>' + Samsung.RAM + '<br>' + Samsung.camera;*/
    

    
//}