//Class Pattern 

class Persona{
    constructor(nombre, email){
        this.nombre = nombre; 
        this.email = email; 
    }
}

const persona = new Persona('Diego', 'Dart@gmail.com');

console.log(persona);