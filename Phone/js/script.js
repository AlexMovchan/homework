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



    
    
document.getElementById('first').innerHTML = print(Nokia);
document.getElementById('second').innerHTML = print(Apple);
document.getElementById('third').innerHTML = print(Samsung);
    

    
//}