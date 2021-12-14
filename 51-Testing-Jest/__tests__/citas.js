import Citas from '../js/classes/Citas.js';



describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now()

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Kiba',
            propietario: 'Diego',
            telefono: '19030913',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citaObj.id = id;

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Akamaru',
            propietario: 'Diego',
            telefono: '19030913',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        }

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {

        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});