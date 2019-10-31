import { TestBed, inject } from '@angular/core/testing';

import { ValidatorService } from './validator.service';
import { HttpClientModule } from '@angular/common/http';

describe('ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ValidatorService]
    });
  });

  it('should be created', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
