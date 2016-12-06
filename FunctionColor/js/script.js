window.onload= function() {

    var colors = ['blue', 'green', 'yellow', 'orange', 'red']
    

    
    function Color(counter){
        
        counter--;
       
        document.write('<p style="background-color:' + colors[counter] + '">' + counter +'</p><br>');
            
        if(counter != 0){
            Color(counter)     
        }
        
        document.write('<p style="background-color:' + colors[counter] + '">' + counter +'</p><br>');
   
    }
    
    

   Color (5);
    
}