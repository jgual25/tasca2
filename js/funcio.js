
 function dnivalid(){
      var sencer = $('#dni').val().toUpperCase();
       var chars = ['T','R','W','A','G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E'];
       var lletra = sencer.substr(-1);
       var numero = parseInt(sencer.substr(0, sencer.length -1));
       var posicio = (numero%23);
       if(lletra == chars[posicio]){
          return true;
        }else{
           alert('La lletra de DNI no correspon al número escrit');
           return false;
        }
}

function fila(){
    var novafila = $('<tr><td>'+$('#dni').val()+'</td>'+
    '<td>'+$("#nom").val()+'</td>'+
    '<td>'+$("#cognom").val()+'</td>'+
    '<td>'+$("#correu").val()+'</td>'+
    '<td>'+$("#nota").val()+'</td></tr>');
    <button onclick="eliminar()">Eliminar</button>
    novafila.appendTo('#alumnes');
    return false;
}
function eliminar(){
    var supr = $('<tr><td>'+$('#dni').val()+'</td>'+
    '<td>'+$("#nom").val()+'</td>'+
    '<td>'+$("#cognom").val()+'</td>'+
    '<td>'+$("#correu").val()+'</td>'+
    '<td>'+$("#nota").val()+'</td></tr>');
    supr.remove('#ncolumna');
    return false;
}

