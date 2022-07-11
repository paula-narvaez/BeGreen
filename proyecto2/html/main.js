$(document).ready(function(){
    $("#alertaNombre").hide();
    $("#alertaApellido").hide();
    $("#alertaEmail").hide();
    $("#alertaRut").hide();
    $("#alertaMensaje").hide();
    $("#alertaCiudad").hide();
    $("#alertaTelefono").hide();

    var mensaje = " ";
    $("#alertaNombre").html(mensaje);

    $("#nombre").focusout(function(){
        if($("#nombre").val().trim().length==0){
            mensaje = "Debe ingresar un nombre";
            $("#alertaNombre").html(mensaje);
            $("#alertaNombre").show();
            
        }
        else{
            $("#alertaNombre").hide();
        }
    })

    $("#apellidos").focusout(function(){
        if($("#apellidos").val().trim().length==0){
            mensaje = "Debe ingresar un apellido";
            $("#alertaApellido").html(mensaje);
            $("#alertaApellido").show();
            
        }
        else{
            $("#alertaApellido").hide();
        }
    })

    $("#email").focusout(function(){
        if($("#email").val().trim().length==0){
            mensaje = "Debe ingresar un email válido"
            $("#alertaEmail").html(mensaje);
            $("#alertaEmail").show();
        }
        else{
            $("#alertaEmail").hide();
        }
    })

    $("#telefono").focusout(function(){
        if($("#telefono").val().trim().length!=9){
            mensaje = "Debe ingresar un número de telefono válido"
            $("#alertaTelefono").html(mensaje);
            $("#alertaTelefono").show();
        }
        else{
            $("#alertaTelefono").hide();
        }
    })


    $("#mensaje").focusout(function(){
        if($("#mensaje").val().trim().length<30){
            mensaje = "Debe ingresar un mensaje de al menos 30 caracteres.";
            $("#alertaMensaje").html(mensaje);
            $("#alertaMensaje").show();
            
        }
        else{
            $("#alertaMensaje").hide();
        }
    })

    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut : function (rutCompleto) {
          rutCompleto = rutCompleto.replace("‐","-");
          if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
          var tmp   = rutCompleto.split('-');
          var digv  = tmp[1]; 
          var rut   = tmp[0];
          if ( digv == 'K' ) digv = 'k' ;
          
          return (Fn.dv(rut) == digv );
        },
        dv : function(T){
          var M=0,S=1;
          for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
          return S?S-1:'k';
        }
      }
      
      
      $("#txt_rut").focusout(function(){
        if (Fn.validaRut( $("#txt_rut").val() )){
          $("#alertaRut").hide()
          
        } else {
          $("#alertaRut").html("Debe ingresar un rut válido ");
          $("#alertaRut").show();
        }
      });
})

/*{
    validacion de email en caso de ser necesaria pero el type email valida por si solo
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
} */