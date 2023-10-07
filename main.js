// function f(){
//     console.log('hvuvhkbj')
// }
var can=document.getElementsByTagName('input(#name)').value
function first(){
    document.getElementById('bigscreen').innerHTML= can
}
function clear(){
    document.getElementById('bigscreen').innerText =''
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
    document.getElementById('bigscreen').innerHTML = 'your total grade is: '+ add /7
    if(cor1>100 || cor2>100 || cor3>100 || cor4>100 || cor5>100 || cor6>100 || cor7>100) alert('modafucker go and reduce the score value below 100');
}