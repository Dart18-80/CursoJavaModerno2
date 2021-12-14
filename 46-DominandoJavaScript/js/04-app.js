//Implicit Binding

const usuario = {
    nombre: 'Diego', 
    edad: 21,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }, 
    mascota:{
        nombre: 'Kiba', 
        edad: 2,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();

usuario.mascota.informacion();