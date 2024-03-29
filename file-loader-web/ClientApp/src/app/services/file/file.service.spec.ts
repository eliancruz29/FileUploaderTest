import { TestBed, inject } from '@angular/core/testing';

import { FileService } from './file.service';
import { HttpClientModule } from '@angular/common/http';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [FileService]
    });
  });

  it('should be created', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});
