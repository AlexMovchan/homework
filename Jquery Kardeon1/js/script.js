window.onload = function() {
    
   /* $('button').click(function(){
        $('div').hide();
        $(this).next().show(250);
        $('button').css({'background-color' : 'buttonface'})
        $(this).css({'background-color' : 'red'})
    })

*/
    
    $('div').click(function(){
        $('div').css({'background-color' : 'yellow'});
        $(this).css({'background-color' : 'cyan'});
        $('span').css({display : 'none'})
        $(this).next().css({display : 'table-cell'})
        $('span').css({opacity : '0' })
        $(this).next().animate({opacity : '0.9' }, 400)
        $('span').css({backgroundColor : 'white' })
        $(this).next().css({backgroundColor : 'cyan'})
    })
    
    

}

