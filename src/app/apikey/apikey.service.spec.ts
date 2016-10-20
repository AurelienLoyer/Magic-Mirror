/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApikeyService } from './apikey.service';

describe('Service: Apikey', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApikeyService]
    });
  });

  it('should ...', inject([ApikeyService], (service: ApikeyService) => {
    expect(service).toBeTruthy();
  }));
});
