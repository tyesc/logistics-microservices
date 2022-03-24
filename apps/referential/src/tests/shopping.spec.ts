import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { startApp } from './utils';

describe('Basket', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await startApp();
  });

  it(`/GET basket`, () => {
    return request(app.getHttpServer())
      .get('/api/basket')
      .expect(200)
      .expect('basket');
  });
});
