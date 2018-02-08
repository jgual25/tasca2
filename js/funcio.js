
 function dnivalid(){
      var sencer = $('#dni').val().toUpperCase();
       var chars = ['T','R','W','A','G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E'];
       var lletra = sencer.substr(-1);
       var numero = parseInt(sencer.substr(0, sencer.length -1));
       var posicio = (numero%23);
       if(lletra == chars[posicio]){
          return true;
        }else{
           return false;
        }
}

var nfila = 0;

function fila(){
    if (dnivalid()==false){
        alert('La lletra de DNI no correspon al número escrit');
           return false;
    }else{
    var novafila = $('<tr id="'+nfila+'"><td>'+$('#dni').val()+'</td>'+
    '<td>'+$("#nom").val()+'</td>'+
    '<td>'+$("#cognom").val()+'</td>'+
    '<td>'+$("#correu").val()+'</td>'+
    '<td>'+$("#nota").val()+'</td>'+
    '<td>'+("<button type='button' onclick=eliminar("+nfila+") class='btn btn-danger'>Esborrar</button>")+'</td></tr>');
    novafila.appendTo('#alumnes');
    nfila++;
    return false;
    }
}
/*<input type='button' onclick=eliminar("+nfila+") value='Esborrar'>
<button type="button" class="btn btn-warning">Warning</button>*/
function eliminar(nfila){
    $('#'+nfila).remove();
}


