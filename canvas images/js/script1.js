window.addEventListener("load", draw, true);
        
        function draw() {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
     
            var x = [90, 130, 130, 80, 30, 40, 90, 127, 43, 128, 33, 127, 38, 130, 130, 90, 130, 130, 80, 30, 40, 140, 180, 220, 230, 180, 140, 140, 218, 141, 228, 143, 222, 140, 140, 180, 220, 230, 180, 140];
            var y = [20, 30, 180, 200, 160, 60, 20, 30, 60, 100, 160, 178, 90, 55, 30, 20, 30, 180, 200, 160, 60, 30, 20, 60, 160, 200, 180, 31, 60, 100, 160, 179, 90, 55, 30, 20, 60, 160, 200, 180];
            var i = 0;
            context.save();
            
            context.translate(500, 300)

            
            context.beginPath();  
            context.moveTo(90,20);
     
            var gradient = context.createLinearGradient(0, 0, 0, 300);
            var timer = setInterval(drawStroke, 140); 
            function drawStroke(){
                context.lineTo(x[i], y[i]);
                context.fillStyle = gradient;
                context.fill();
                context.stroke();
                

                gradient.addColorStop(0, "#2eadfd");
                gradient.addColorStop(0.85, "White");


                
                i += 1;
                if(i == 21) {
                    context.moveTo(x[i], y[i]);  
                }
                if(i == 41) {
                    clearInterval(timer);
                    context.closePath();
                    context.font = "bold 36px black";
                    context.fillText("MAIN", 300, 90);
                    context.fillText("ACADEMY", 270, 130);

                }
            }

  
            

 
        }

        if (window.addEventListener)
            window.addEventListener("load", draw, true);





