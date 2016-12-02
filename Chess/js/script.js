//window.onload = function(){
var arr = new Array(8);

for(var i = 0; i < arr.length; i++ ){
	arr[i] = new Array(8);
};

/*arr[i]
arr[row][col]*/

for(var row = 0; row < arr.length; row++){
	for(var col = 0 ; col< arr.length; col++){
		if((row+col)%2 == 1){
			arr[row][col] = '<div id="black"></div>';
		}else{
			arr[row][col] = '<div id="white"></div>';
		}		
	}
};

//<div id="white"><img src="img/2.png" width="50px" height="50px"></div>


// 2 row and 7 row ------------------------

for(var row = 0; row < arr.length; row++){
	for(var col = 0 ; col< arr.length; col++){
        if((row == 1) && ((col+2)%2 == 0)){
			arr[row][col] = '<div id="black"><img src="img/1.png" width="50px" height="50px"></div>';	
	   }else if ((row == 1) && ((col+2)%2 == 1)) {
           arr[row][col] = '<div id="white"><img src="img/1.png" width="50px" height="50px"></div>';
       }
    }
};	

for(var row = 0; row < arr.length; row++){
	for(var col = 0 ; col< arr.length; col++){
        if((row == 6) && ((col+2)%2 == 0)){
			arr[row][col] = '<div id="white"><img src="img/2.png" width="50px" height="50px"></div>';	
	   }else if ((row == 6) && ((col+2)%2 == 1)) {
           arr[row][col] = '<div id="black"><img src="img/2.png" width="50px" height="50px"></div>';
       }
    }
};

//-------------------------------------------

// white side -----------------------

arr[0][0] ='<div id="white"><img src="img/tura_w.jpg" width="50px" height="50px"></div>';
arr[0][1] ='<div id="black"><img src="img/hourse_w.jpg" width="50px" height="50px"></div>';
arr[0][2] ='<div id="white"><img src="img/ferz_w.jpg" width="50px" height="50px"></div>';
arr[0][3] ='<div id="black"><img src="img/king_w.jpg" width="50px" height="50px"></div>';
arr[0][4] ='<div id="white"><img src="img/queen_w.jpg" width="50px" height="50px"></div>';
arr[0][5] ='<div id="black"><img src="img/ferz_w.jpg" width="50px" height="50px"></div>';
arr[0][6] ='<div id="white"><img src="img/hourse_w.jpg" width="50px" height="50px"></div>';
arr[0][7] ='<div id="black"><img src="img/tura_w.jpg" width="50px" height="50px"></div>';




// black side ---------------------------

arr[7][0] ='<div id="black"><img src="img/tura_b.jpg" width="50px" height="50px"></div>';
arr[7][1] ='<div id="white"><img src="img/hourse_b.jpg" width="50px" height="50px"></div>';
arr[7][2] ='<div id="black"><img src="img/ferz_b.jpg" width="50px" height="50px"></div>';
arr[7][3] ='<div id="white"><img src="img/queen_b.jpg" width="50px" height="50px"></div>';
arr[7][4] ='<div id="black"><img src="img/king_b.jpg" width="50px" height="50px"></div>';
arr[7][5] ='<div id="white"><img src="img/ferz_b.jpg" width="50px" height="50px"></div>';
arr[7][6] ='<div id="black"><img src="img/hourse_b.jpg" width="50px" height="50px"></div>';
arr[7][7] ='<div id="white"><img src="img/tura_b.jpg" width="50px" height="50px"></div>';


for(var row = 0; row < arr.length; row++){
	for(var col = 0 ; col< arr.length; col++){
		document.write(arr[row][col])
	}
	document.write('<br>');
}







//}