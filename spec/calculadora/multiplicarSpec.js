describe('Suíte de Testes da Multiplicação', () => {
   
    let Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 6 para 2 e 3', () => {
        expect(Calculadora.multiplicar(2,3)).toEqual(6);
    });

    it('deve retornar 6 para 2 e 3 no formato texto', () => {
        expect(Calculadora.multiplicar('2','3')).toEqual(6);
    });

    it('deve retornar 4.5 para 3 e 1.5', () => {
        expect(Calculadora.multiplicar(3, 1.5)).toEqual(4.5);
        expect(Calculadora.multiplicar('3', '1.5')).toEqual(4.5);
    });

    it('deve retornar 0 quando valor 1 não for numérico', () => {
        expect(Calculadora.multiplicar(undefined, 3)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 não for numérico', () => {
        expect(Calculadora.multiplicar(3, undefined)).toEqual(0);
    });
});