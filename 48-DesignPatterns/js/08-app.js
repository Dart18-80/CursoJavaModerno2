function Vendedor(nombre){
    this.nombre = nombre; 
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio)=>{
        console.log(`Tenemos el siguiente Articulo ${articulo}, iniciamos con un precio de $${precio}`);
    }, 
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre; 
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador)=>{
        console.log(`${comprador.nombre} : $${cantidad}`);
    }
}

function Subasta(){
    let compradores = {};

    return{
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear Objetos 
const Diego = new Comprador('Diego');
const Carlos = new Comprador('Carlos');
const vendedor = new Vendedor('Vendedor de Autos');
const canasta = new Subasta();

//Tienes que regitrarlo
canasta.registrar(Diego);
canasta.registrar(Carlos);
canasta.registrar(vendedor);

vendedor.oferta('Mario Kart', 500);

Carlos.oferta(450, Carlos);
Diego.oferta(500, Diego);
Carlos.oferta(550, Carlos);
Diego.oferta(600, Diego);

vendedor.vendido('Diego');