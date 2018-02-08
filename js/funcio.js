
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

var nfila = 0;

function fila(){
    var novafila = $('<tr id="'+nfila+'"><td>'+$('#dni').val()+'</td>'+
    '<td>'+$("#nom").val()+'</td>'+
    '<td>'+$("#cognom").val()+'</td>'+
    '<td>'+$("#correu").val()+'</td>'+
    '<td>'+$("#nota").val()+'</td>'+
    '<td>'+("<input type='button' onclick=eliminar("+nfila+")><i class='fas fa-minus-circle'></i>")+'</td></tr>');
    novafila.appendTo('#alumnes');
    nfila++;
    return false;
}

function eliminar(nfila){
    $('#'+nfila).remove();
}



/*var novafila = $('<tr id="'+ nfila +'"><td>'+$('#dni').val()+'</td>'+
'<td>'+$("#nom").val()+'</td>'+
'<td>'+$("#cognom").val()+'</td>'+
'<td>'+$("#correu").val()+'</td>'+
'<td>'+$("#nota").val()+'</td>'+
'<td>'+("<input type='button' onclick=eliminar("+nfila+") value='Borrar'>")+'</td></tr>');
novafila.appendTo('#alumnes');
nfila++;
return false;
}

function eliminar(nfila){         
$('#'+nfila).remove();
}
*/


