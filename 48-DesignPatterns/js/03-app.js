//Singleton 

let instancia = null;

class Persona1{
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre; 
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const persona2 = new Persona1('Diego', 'dial@gmail.com');
console.log(persona2);
const persona3 = new Persona1('Andres', 'andres@gmail.com');
console.log(persona3);
