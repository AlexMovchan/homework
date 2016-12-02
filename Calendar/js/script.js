window.onload = function(){
    var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var winter = month[11] + ' ' + month[0] + ' ' + month[1];
    var autumn = month[2] + ' ' + month[3] + ' ' + month[4];
    var summer = month[5] + ' ' + month[6] + ' ' + month[7];
    var spring = month[8] + ' ' + month[9] + ' ' + month[10];
    
    var answer = prompt('Please insert the season! Winter, autumn, summer or spring');
    
    switch(answer){
        case 'winter':
            alert(winter);
            break;
        case 'autumn':
            alert(autumn);
            break;
        case 'summer':
            alert(summer);
            break;
        case 'spring':
            alert(spring);
            break;
        default :
            alert('i don"t know this season');
            break;
    }
            
    
}