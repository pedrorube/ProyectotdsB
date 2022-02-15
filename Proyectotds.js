var precio_base = 2000

var edad_18 = 0.1; 
var edad_25 = 0.2; 
var edad_50 = 0.3; 

var casado_18 = 0.1; 
var casado_25 = 0.2; 
var casado_50 = 0.3;

var hijos_recargo = 0.2; 

var recargo = 0
var recargo_total = 0

var precio_final = 0

var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var casado = prompt("¿Está casado actualmente?", "si/no" )


var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("tiene hijos", "si/no")
var cantidad_hijos
if("SI" == hijos.toUpperCase() ){
  cantidad_hijos = prompt("cuantos hijos tiene")
}

  var cantidad_hijo_numero= 0
  if("SI" == hijos.toUpperCase()){
  cantidad_hijo_numero = parseInt(cantidad_hijos)
}
if(edad_numero>=18 && edad_numero<=24){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}else if (edad_numero>=25 && edad_numero <=49){
  recargo= precio_base *edad_25
  recargo_total= recargo_total + recargo
}else if (edad_numero >=50){
  recargo= precio_base * edad_50
  recargo_total= recargo_total + recargo
}

if(edad_conyuge_numero >= 18 && edad_conyuge_numero <=24){
  recargo = precio_base * casado_18
  recargo_total= recargo_total + recargo
}else if (edad_conyuge_numero>=25 && edad_conyuge_numero <=49){
  recargo= precio_base * casado_25
  recargo_total= recargo_total + recargo
}else if (edad_conyuge_numero >=50){
  recargo= precio_base * casado_50
  recargo_total= recargo_total + recargo
}

  recargo = (precio_base * hijos_recargo) * cantidad_hijo_numero
  recargo_total= recargo_total + recargo
 
precio_final = precio_base + recargo_total

alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

