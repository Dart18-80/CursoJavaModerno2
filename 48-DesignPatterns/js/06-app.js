//complemento del app5 
console.log(modulo1.nombre);

console.log(modulo1.hola);

//App6 

class Persona2{
    constructor(nombre, email){
        this.nombre = nombre; 
        this.email = email; 
    }
}

class Persona3{
    constructor(nombre, email){
        this.nombre = nombre; 
        this.email = email; 
    }
}

const funcionesPersona = {
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

//Añadir funcionesPersonas a la clase de persona 
Object.assign(Persona2.prototype, funcionesPersona);
Object.assign(Persona3.prototype, funcionesPersona);

const cliente4 = new Persona2('Diego','dieruiz@gmail.com');
console.log(cliente4);
cliente4.mostrarInfo();
cliente4.mostrarNombre();

const cliente5 = new Persona3('Alejandro','ale@gmail.com');
console.log(cliente5);
cliente5.mostrarInfo();
cliente5.mostrarNombre();