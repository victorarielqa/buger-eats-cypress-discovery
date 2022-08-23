
import signup from '../Pagess/SignupPages'
import SignupFactory from '../factories/SignupFactory'
import SignupPages from '../Pagess/SignupPages'



describe('Cadastro', () => {

    //beforeEach(function() {
    //cy.fixture('deliver').then((d)=>{
    //this.deliver = d

    // })
    //})

    it('Usuário deve ser um entregador', function () {

        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoulbe(expectedMessage)

    })

    it('CPF invalido', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '000000141AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessegeShouldBe('Oops! CPF inválido')

    })

    it('Email inv', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessegeShouldBe('Oops! Email com formato inválido.')

    })

    context('Campos Obrigatorios', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessegeShouldBe(msg.output)
            })
        })

    })

})
