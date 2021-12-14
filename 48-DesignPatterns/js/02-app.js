class Empleado{
    constructor(nombre, email){
        this.nombre = nombre; 
        this.email = email; 
    }
}

class Cliente extends Empleado{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Diego', 'dart@gmail.com', 'ads');
console.log(cliente);

const person = new Empleado('Alejandro', 'ale@gmail.com');
console.log(person);
