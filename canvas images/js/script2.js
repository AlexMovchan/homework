 function draw() {

            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
     
            var x = [90, 130, 130, 80, 30, 40, 90, 127, 43, 128, 33, 127, 38, 130, 130, 90, 130, 130, 80, 30, 40];
            var y = [20, 30, 180, 200, 160, 60, 20, 30, 60, 100, 160, 178, 90, 55, 30, 20, 30, 180, 200, 160, 60];
            var i = 0;
            context.save();

            var timer = setInterval(drawStroke, 10);
            
            function drawStroke(){
                context.beginPath();
                
                context.moveTo(90,20);
                context.lineTo(130,30);
                context.lineTo(130,180);
                context.lineTo(80,200);
                context.lineTo(30,160);
                context.lineTo(40,60);
                context.lineTo(90,20);
                context.lineTo(127,30);
                context.lineTo(43,60);
                context.lineTo(128,100);
                context.lineTo(33,160);
                context.lineTo(127,178);
                context.lineTo(38,90);
                context.lineTo(130,55);
                context.lineTo(130,30);
                context.lineTo(90,20);
                context.lineTo(130,30);
                context.lineTo(130,180);
                context.lineTo(80,200);
                context.lineTo(30,160);
                context.lineTo(40,60);

                context.moveTo(140,30);
                context.lineTo(180,20);
                context.lineTo(220,60);
                context.lineTo(230,160);
                context.lineTo(180,200);
                context.lineTo(140,180);
                context.lineTo(140,31);
                context.lineTo(218,60);
                context.lineTo(141,100);
                context.lineTo(228,160);
                context.lineTo(143,179);
                context.lineTo(222,90);
                context.lineTo(140,55);
                context.lineTo(140,30);
                context.lineTo(180,20);
                context.lineTo(220,60);
                context.lineTo(230,160);
                context.lineTo(180,200);
                context.lineTo(140,180);





                context.closePath();
            }

            // настройка стиля заливки

            // настройка стилей линии.
            context.font = "bold 36px Segoe UI";
            context.fillText("MAIN", 300, 90);
            context.fillText("ACADEMY", 270, 130);
            context.lineWidth = 4;
            
            var gradient = context.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "#2eadfd");
            gradient.addColorStop(0.85, "White");
            context.fillStyle = gradient;
            context.fill();
            
            context.strokeStyle = "rgba(100, 100, 100)";
            context.lineJoin = "round";
            context.stroke();
            

 
        }

        if (window.addEventListener)
            window.addEventListener("load", draw, true);





