// Estas son las variables de js
//Variables tipo STRIGN (cadenas de textos o alfanumericas)
//let nombre = "Karen"
//let nombreCompleto = "Ivanna Macia"
//let profecion = "Enologa"
//console.log ("LaPeda:", nombre, nombreCompleto)

// vARIABLE DEL TIPO NUMERICO
//let anoActual = 2024
//let anodeNacimiento = 1992
//Variables calculadas de a partir de otros valores
//let edadActual = anoActual - anodeNacimiento

//let producto = "Cafetera Expreso"
//let precioDelProducto = 119.40 // se utiliza el punto como separador decimal.
//let precioViajeEnCrucero = 46732.45 

//HERRAMIENTAS DE JS PARA EMPESAR A INTERACTUAR CON DATOS
//OBJETO CONSOLE : console.log("texto estatico y " textoDinamico )

//console.log ("Hola Mundo")
//console.log ("Edad del Usuario: " + edadActual)

//CUADROS DE DIALOGO
//console.warn("Esto es una advertencia.")
//console.error("Houston, tenemos un problema")

//CUADROS DE DIALOGO
//alert() - prompt() - confirm()

//alert ("Esto es un mensaje para el usuario.")
//console.log ("LaPeda:", nombre, nombreCompleto)

//let nombreCompleto = prompt ("Ingrese tu nombre")
//console.log("Bienenido:", nombreCompleto)
//alert("Bienivenido: " + nombreCompleto)

//let respuesta = confirm("¿ Deseas formatear tu disco rigido?")
  //  console.log(respuesta)

// parseInt()  recibe un numero entero o con decimales y lo retorna como numero entero.
// parseFloat() recibe un numero con decimales, retorna un numero con decimales.

//let numeroA = prompt ("Ingresa el primero numero")
//let numeroB = prompt ("Ingresa el segundo numero")




// PREENTREGA 1


const interesFijo = 1.13

function calculadoraMensual(monto,meses,interesFijo) {
  let montoTotal = (parseInt(monto) * parseInt(interesFijo))
  for (let i = 1; i <= meses; i++) {
    
    console.log("Cuotas " + i + " $ " + (montoTotal / meses))
  }
}

function simularPrestamo(){
  let monto = prompt ("ingrese el monto del prestamo a solicitar: ")
  let totalCuotas = prompt ("en cuantas cuotas devuelves:")


  if (monto !== "" && totalCuotas !== ""){
    calculadoraMensual(monto, totalCuotas, interesFijo)
  } else{
      alert("monto no valido")
  }
}

