
//valida que el input contenga un numero de telefono con elformato valido//


var btn = document.getElementById("input-phone");
btn.addEventListener("click", function(){
  var phone = document.getElementById("solicitud").value; // toma el valor ingresado en el input y evalua el formato//
  if(phone.length != 9){
    alert("Error, Debe ingresar un teléfono de 9 dígitos");
  } else {
    var msj = document.getElementById("solicitud"); //entrega un alert indicando que el numero ingresado es cumple con el formato//
    msj.innerHTML = "Bien ingresado";
    alert("Su número de teléfono se ingresó correctamente");
  }
});
