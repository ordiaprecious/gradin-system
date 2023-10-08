prompt('input your username to check your fucking result')

function first(){
    var can=document.getElementById('name').value  
    document.getElementById('screen').innerHTML= 'candidate: ' +can 
    
}
function clear(){
    var empty=document.getElementById('screen').value=''
    document.getElementById('screen').value =empty
    console.log('djd')
}

function finish(){
    var cor1= document.getElementById('eng').value;
    var cor2= document.getElementById('psy').value;
    var cor3= document.getElementById('spa').value;
    var cor4= document.getElementById('bio').value;
    var cor5= document.getElementById('eed').value;
    var cor6= document.getElementById('cod').value;
    var cor7= document.getElementById('arts').value;
    var add=parseFloat(cor1)+ parseFloat(cor2) + parseFloat(cor3) +parseFloat(cor4) +parseFloat(cor5) + parseFloat(cor6) +parseFloat(cor7)
    goal=(add * 100) /700 +'%'
    document.getElementById('bigscreen').innerHTML = 'your total grade is: '+ goal
    // if (goal >= 80){document.getElementById('screen').innerHTML='you passed bitch'}
    if(cor1>100 || cor2>100 || cor3>100 || cor4>100 || cor5>100 || cor6>100 || cor7>100) alert('modafucker go and reduce the score value below 100');
    // if (add >80 ){
    //     document.getElementById('bigscreen').innerHTML= add + 'you passed bitch'
    // }
}