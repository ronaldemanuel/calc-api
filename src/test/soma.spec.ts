import soma from '../helper/soma';
import Request from 'supertest';
import app from '../routes';

describe('quando a funcao soma for chamada', () => {
  it('devera retornar a soma dos parametros', () => {
    const resultado = soma(1, 2);
    expect(resultado).toBe(3);
  });
});

describe('quando a rota de soma for chamada', () => {
  it('devera retornar os parametros somados', async () => {
    const res = await Request(app).get('/soma/1/2');
    expect(res.text).toBe('3');
  });

  describe('e quando algum parametro não for numerico', () => {
    it('devera retornar um status http 500', async () => {
      const res = await Request(app).get('/soma/1/a');
      expect(res.status).toBe(500);
    });

    it('devera retornar uma mensagem de erro', async () => {
      const res = await Request(app).get('/soma/1/a');

      expect(res.body.message).toBe('o parâmetro deve ser um número');
    });
  });
});