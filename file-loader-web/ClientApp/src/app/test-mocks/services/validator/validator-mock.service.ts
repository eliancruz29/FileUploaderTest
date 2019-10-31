import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IValidationData } from 'src/app/models/validation-data';

@Injectable()
export class ValidatorMockService {
  private validation: IValidationData;

  constructor() { }

  public getValidationData(): Observable<IValidationData> {
    this.validation = {
      size: 2097152,
      types: ['application/pdf', 'text/rtf', 'application/msword']
    } as IValidationData;

    return of(this.validation);
  }

  public isValidFile(file: File): boolean {
    return true;
  }
}
