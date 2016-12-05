//window.onload= function() {
        
  function Phone(model, color, RAM, camera, photoof) {
      this.model = model,
      this.color = color,
      this.RAM = RAM,
      this.camera = true,
      this.photoof = function(){
          this.camera = false;
      },
      this.ring = function(){
          alert('ring_ring_ring');
      }
  } 
 function print(Phone){
        for(var n in Phone){
            document.write(n + ': ' + Phone[n] + '<br>')
        }
    }
    
    

var Nokia = new Phone('3310', 'white', '1Gb', true);
var Apple = new Phone('iphone5', 'black', '2Gb', true);
var Samsung = new Phone('galaxyS', 'white', '2Gb', true);



    
    
document.getElementById('first').innerHTML = '<img src="img/nokia.jpg" width="80px" height="100px"><br>' + Nokia.model + '<br>' + Nokia.color + '<br>' + Nokia.RAM + '<br>' + Nokia.camera;
document.getElementById('second').innerHTML = '<img src="img/apple.jpg" width="80px" height="100px"><br>' + Apple.model + '<br>' + Apple.color + '<br>' + Apple.RAM + '<br>' + Apple.camera;
document.getElementById('third').innerHTML = '<img src="img/samsung.png" width="80px" height="100px"><br>' + Samsung.model + '<br>' + Samsung.color + '<br>' + Samsung.RAM + '<br>' + Samsung.camera;
    

    
//}