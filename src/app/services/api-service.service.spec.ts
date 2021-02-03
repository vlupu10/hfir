import { Injectable } from '@angular/core';

import { ApiService } from './api-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable()
class MockHttpClient {
  post() {}
}

describe('ApiService', () => {
  let service;
  const req: any = {};
  const handler: HttpHandler = { handle: req };

  beforeEach(() => {
    service = new ApiService(new HttpClient(handler));
  });

  it('should run #getPatients()', async () => {
    service.httpClient = service.httpClient || {};
    service.httpClient.get = 'get';
    spyOn(service.httpClient, 'get');
    service.getHeaders = service.getHeaders || {};
    service.getHeaders = 'getHeaders';
    spyOn(service, 'getHeaders');
    service.getPatients();
    expect(service.httpClient.get).toHaveBeenCalled();
    expect(service.getHeaders).toHaveBeenCalled();
  });

});
