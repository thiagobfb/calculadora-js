describe('Suíte de Testes da Subtração', () => {
   
    let Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 1 para 3 e 2', () => {
        expect(Calculadora.subtrair(3,2)).toEqual(1);
    });

    xit('deve retornar 6 para 9 e -3 no formato texto', () => {
        expect(Calculadora.adicionar('9','-3')).toEqual(6);
    });

    xit('deve retornar 4.5 para 1.5 e 3', () => {
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    xit('deve retornar 0 quando valor 1 não for numérico', () => {
        expect(Calculadora.adicionar(undefined, 3)).toEqual(0);
    });

    xit('deve retornar 0 quando valor 2 não for numérico', () => {
        expect(Calculadora.adicionar(3, undefined)).toEqual(0);
    });
});