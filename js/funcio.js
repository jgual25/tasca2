
 function dnivalid(){//funció que comprova la identifiació.
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

var nfila = 0
function fila(){//funció que inserta una fila per cada pic que es clica al botó, després d'haver rellentat correctament els camps del formulari
    if (dnivalid()==false){
        alert('La lletra de DNI no correspon al número escrit');
           return false;
    }else{//en el cas de que la lletra sigui incorrecta, retorna fals i no ho inserta. en el cas de que el dni sigui correcte i la resta de camps estiguin completats, inserta una fila a la taula.
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

function eliminar(nfila){//funcio que per a una fila insertada a la taula, permet esborrar-la per mitjà d'un botó.
    $('#'+nfila).remove();
}

