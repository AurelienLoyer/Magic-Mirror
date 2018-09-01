/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BixiService } from './bixi.service';

describe('Service: Vlille', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BixiService]
    });
  });

  it('should ...', inject([BixiService], (service: BixiService) => {
    expect(service).toBeTruthy();
  }));
});
