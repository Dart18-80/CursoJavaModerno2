self.onload = () =>{
    console.log('Ventana Lista');
}

const Producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30, 
    disponible: true, 
    mostrarInfo: function(){
        return `El producto: ${self.nombre}`
    }
}

console.log(Producto.mostrarInfo());