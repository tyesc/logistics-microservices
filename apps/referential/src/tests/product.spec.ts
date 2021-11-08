import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { startApp } from './utils';
import { ProductDto } from '@log/ref';

describe('Product', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await startApp();
  });

  describe('POST', () => {
    it('should return 201 if product is valid', async () => {
      await request(app.getHttpServer())
        .post('/api/products')
        .send({
          ean: '12346',
          name: 'Boomerang',
          description: 'Coming straight from Australia',
          categories: ['game']
        } as ProductDto)
        .expect(201)
    });
  });

  it(`/GET ping`, () => {
    return request(app.getHttpServer())
      .get('/api/ping')
      .expect(200)
      .expect('Pong');
  });
});
