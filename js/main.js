
const carrito = []

const centroMedico = [{imagen: "🚑", codigo: 1, nombre: 'traslados', precio: 30000},
                     {imagen:"🏥", codigo: 2, nombre: "consultoriosMedicos", precio: 20000},
                     {imagen: "🩺", codigo: 3, nombre: "consultaMedica", precio: 15000},
                     {imagen:"👨‍⚕️", codigo: 4, nombre: "enfermeria", precio: 10000},
                     {imagen: "💊", codigo: 5, nombre: "controlDroga", precio: 8000},
                     {imagen: "🍺", codigo: 6, nombre: "controlAlcohol", precio: 7000},
                     {imagen: "🔬", codigo: 7, nombre: "laboratorio", precio: 6000},
                     {imagen: "👷‍♂️", codigo: 8, nombre: "preocupacional", precio: 5000},
  ]


function selccionarServicios(codigo){
     let prestacionSeleccionada = centroMedico.find((centroMedic)=> centroMedic.codigo === codigo)
     return prestacionSeleccionada  
}


function comprar(){
    let codigo = prompt( "Ingrese el codigo del Centro Medico: " )
    let servicioMedico = selccionarServicios( parseInt (codigo))



  if (servicioMedico === undefined){
    alert("📛 No se encontrol el servicio")
  } else{
      carrito.push(servicioMedico)
      alert(servicioMedico.nombre + "se agrego al carrito")
      let respuesta = confirm("¿Deseas agregar, otro servicio?")
      if (respuesta === true){
      comprar()
    } else {
       const shop = new compra(carrito)
       let subtotal = shop.obternerSubtotal()
      console.log("el costo total del servivio es $ " , subtotal.toLocaleString("es-AR"))
    }
  }
      

}
comprar()