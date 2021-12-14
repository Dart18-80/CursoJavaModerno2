//Module Pattern 

const modulo1 = (function(){
    const nombre = 'Diego';

    function hola(){
        console.log('Hola');
    }

    return {
        nombre,
        hola,
    }
})();