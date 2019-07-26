/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Error.interceptior.tsService } from './error.interceptior.ts.service';

describe('Service: Error.interceptior.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Error.interceptior.tsService]
    });
  });

  it('should ...', inject([Error.interceptior.tsService], (service: Error.interceptior.tsService) => {
    expect(service).toBeTruthy();
  }));
});
