describe('Suíte de Testes da Subtração', () => {
   
    let Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 8 e 3', () => {
        expect(Calculadora.subtrair(8,3)).toEqual(5);
    });

    it('deve retornar 5 para 8 e 3 no formato texto', () => {
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
        expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
    });

    it('deve retornar 0 quando valor 1 não for numérico', () => {
        expect(Calculadora.subtrair(undefined, 3)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 não for numérico', () => {
        expect(Calculadora.subtrair(3, undefined)).toEqual(0);
    });
});