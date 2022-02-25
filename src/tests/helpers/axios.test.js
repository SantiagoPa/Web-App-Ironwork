import { getCustomers } from "../../helpers/customersRequest";
import { getProducts } from "../../helpers/producstRequest";
import { axiosLogin } from "../../helpers/usersRequest";

describe('Pruebas en los helpers', () => { 

    test('prueba logearse', async () => { 
        const resp = await axiosLogin('auth/login', { email: 'test1@test1.com', password: '123456' });
        expect( resp.message  ).toEqual( "All Correct" )
    })

    test('prueba obtener clientes', async () => { 
        const resp = await getCustomers('customer');
        expect( resp.message  ).toEqual( "All Correct" )
    })

    test('prueba obtener productos', async () => { 
        const resp = await getProducts('product');
        expect( resp.message  ).toEqual( "All Correct" )
    })

});