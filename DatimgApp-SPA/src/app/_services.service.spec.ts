/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { _servicesService } from './_services.service';

describe('Service: _services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [_servicesService]
    });
  });

  it('should ...', inject([_servicesService], (service: _servicesService) => {
    expect(service).toBeTruthy();
  }));
});
