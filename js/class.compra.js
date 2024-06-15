class compra {
    constructor ( carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obternerSubtotal(){
        if(this.carrito.length > 0 ){
            return this.carrito.reduce((acumulador, centroMedic )=> acumulador + centroMedic.precio,0)
        }
    }
}