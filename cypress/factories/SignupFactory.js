var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85987453245',
            address: {
                postalcode: '60751080',
                street: 'Rua 89',
                number: '93',
                details: '2 etapa',
                district: 'Prefeito José Walter',
                city_state: 'Fortaleza/CE'
            },
            delivery_medoto: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
            
  
    }
}