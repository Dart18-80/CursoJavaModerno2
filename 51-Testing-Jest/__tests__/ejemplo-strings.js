
const password = "132156";

describe('Valida que el password no este vacio y tenga una extencion de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password no vacio', () =>{
        expect(password).not.toHaveLength(0);
    })
});