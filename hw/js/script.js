$(document).ready(function(){
    var h= $('header').height();
    var hsection= $('section').height();
    
    $('.scroll').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000)
    })
    
    $('.scroll1').click(function(){
        $('html, body').animate({scrollTop: h}, 1000)
    })
    $('.scroll2').click(function(){
        $('html, body').animate({scrollTop: h+800}, 1000)
    })
    $('.scroll3').click(function(){
        $('html, body').animate({scrollTop: h+1600}, 1000)
    })
    $('.scroll4').click(function(){
        $('html, body').animate({scrollTop: h+2400}, 1000)
    })
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > h+1500){
            $('#firstItem').fadeIn(300);
            $('#secondItem').css({'transform' : 'rotateX(0)'});
            $('#thirdItem').css({'transform' : 'rotateY(0)'});
        }else {
            $('#firstItem').fadeOut(300);
            $('#secondItem').css({'transform' : 'rotateX(90deg)'});
            $('#thirdItem').css({'transform' : 'rotateY(90deg)'});
        }
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() > h+2300){
            $('#firstItem1').fadeIn(300);
            $('#secondItem1').css({'transform' : 'rotateX(0)'});
            $('#thirdItem1').css({'transform' : 'rotateY(0)'});
        }else {
            $('#firstItem1').fadeOut(300);
            $('#secondItem1').css({'transform' : 'rotateX(90deg)'});
            $('#thirdItem1').css({'transform' : 'rotateY(90deg)'});
        }
    })

    
    $(window).scroll(function(){
        if($(this).scrollTop() > h){
            $('nav').css({'background-color' : 'blue'})

        }
        if($(this).scrollTop() > 2*h){
            $('nav').css({backgroundColor : 'green'})
        }
    })
    
        
    

    
})

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })