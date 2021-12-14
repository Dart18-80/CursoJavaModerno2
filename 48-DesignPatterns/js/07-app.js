const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25 
    }, 
    {
        platillo: 'Hambuerguesa',
        precio: 20 
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    },
];

restaurantApp.funciones = {
    mostrarMenu: platillos =>{
        console.log(`BIENVENIDOS A NUESTRO MENU`);

        platillos.forEach((plato, index) => {
            console.log(`${index} : Platillo ${plato.platillo} precio $${plato.precio}`);
        });
    }, 
    ordenar: id =>{
        console.log(`Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando `);
    }, 
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio,
        };

        restaurantApp.platillos.push(nuevo);
    }
}

const { platillos } = restaurantApp;
restaurantApp.funciones.agregarPlatillo('Taco', 50);
restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.mostrarMenu( platillos );
