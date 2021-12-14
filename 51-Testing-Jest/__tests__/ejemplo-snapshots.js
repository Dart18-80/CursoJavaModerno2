const cliente = {
    nombre: 'Diego Ruiz',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('El Diego Ruiz', () => {
        expect(cliente).toMatchSnapshot();
    });
});