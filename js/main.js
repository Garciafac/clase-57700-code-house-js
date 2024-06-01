
const carrito = []

const centoMedico = [{imagen: "🚑", codigo: 1, nombre: 'traslados', precio: 30000},
                     {imagen:"🏥", codigo: 2, nombre: "consultoriosMedicos", precio: 20000},
                     {imagen: "🩺", codigo: 3, nombre: "consultaMedica", precio: 15000},
                     {imagen:"👨‍⚕️", codigo: 4, nombre: "enfermeria", precio: 10000},
                     {imagen: "💊", codigo: 5, nombre: "controlDroga", precio: 8000},
                     {imagen: "🍺", codigo: 6, nombre: "controlAlcohol", precio: 7000},
                     {imagen: "🔬", codigo: 7, nombre: "laboratorio", precio: 6000},
                     {imagen: "👷‍♂️", codigo: 8, nombre: "preocupacional", precio: 5000},
  ]


function selccionarServicios(codigo){
     let prestacionSeleccionada = centroMedico.find( centroMedic.codigo === codigo)
     return prestacionSeleccionada  
}


function comprar(){
  let codigo = prompt( "Ingrese el codigo del Centro Medico: " )
  let servicioMedico = selccionarServicios( parseInt (codigo))



  if (servicioMedico === undefined){
    alert("📛 No se encontrol el servicio")
  } else{
    carrito.push(prendaElegida)
    alert(servicioMedico.nombre + "se agrego al carrito")
    let respuesta = confirm("¿Deseas agregar, otro servicio?")
    if (respuesta === true){
    comprar()
   } else {
     const shop = new compra(carrito)
     let subtotal = shop.obtenerSubtotal()
     console.log("el costo total del servivio es $ " , subtotal.toLocalesString("es- AR"))
 }
  }
      

}
Comprar()