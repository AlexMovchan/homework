//window.onload = function(){
var arr = new Array(8);

for(var i = 0; i < arr.length; i++ ){
	arr[i] = new Array(8);
};

/*arr[i]
arr[row][col]*/

for(var row = 7; row >= 0; row--){
	for(var col = 0 ; col< arr.length; col++){
		if((row+col)){
			arr[row][col] = '<img src="img/test.jpg" width="100px" height="100px">';
		}else{
			arr[row][col] = '<img src="img/test1.png" width="100px" height="100px">';
		}		
	}
};


for(var row = 0; row < arr.length; row++){
	for(var col = 0 ; col< arr.length; col++){
        document.write(arr[row][col])
	}
	document.write('<br>');
}
//<div id="white"><img src="img/2.png" width="50px" height="50px"></div>


// 2 row and 7 row ------------------------









//}