const cliente = {
    nombre: 'Diego Ruiz',
    balance: 500,
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Diego Ruiz', () =>{
        expect(cliente.nombre).toBe('Diego Ruiz');
    });

    test('No es otro cliente', () =>{
        expect(cliente.nombre).not.toBe('Alejandro');
    });

    test('No tiene 500', () =>{
        expect(cliente.balance).not.toBe(500);
    });
});