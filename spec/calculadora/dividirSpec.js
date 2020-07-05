describe('Suíte de Testes da Divisão', () => {
   
    let Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 2 para 6 e 3', () => {
        expect(Calculadora.dividir(6,3)).toEqual(2);
    });

    it('deve retornar 2 para 6 e 3 no formato texto', () => {
        expect(Calculadora.dividir('6','3')).toEqual(2);
    });

    it('deve retornar 1.5 para 4.5 e 3', () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
        expect(Calculadora.dividir('4.5', '3')).toEqual(1.5);
    });

    it('deve retornar 0 quando valor 1 não for numérico', () => {
        expect(Calculadora.dividir(undefined, 3)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 não for numérico', () => {
        expect(Calculadora.dividir(3, undefined)).toEqual(0);
    });

    it('deve retornar "Erro" quando divir valor por zero', () => {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro');
    });
});