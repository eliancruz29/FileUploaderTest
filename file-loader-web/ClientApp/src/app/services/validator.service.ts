import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IValidationData } from '../models/validation-data';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class ValidatorService {
  private validation: IValidationData;

  constructor(
    private http: HttpClient,
  ) { }

  public getValidationData(): Observable<IValidationData> {
    const url = `${env.apiBaseUrl}/api/validation-data`;
    return this.http.get<IValidationData>(url)
      .pipe(tap(data => this.validation = data));
  }

  public isValidFile(file: File): boolean {
    return this.isValidType(file) && this.isUnderMaxSize(file);
  }

  private isValidType(file: File): boolean {
    if (file && file.type) {
      return this.validation.types.includes(file.type);
    }

    return false;
  }

  private isUnderMaxSize(file: File): boolean {
    if (file && file.size) {
      return file.size <= this.validation.size;
    }

    return false;
  }
}

/** A hero's name can't match the given regular expression */
export function validType(validation: IValidationData): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return validation.types.includes(control.value) ? null : { 'invalidType': { value: control.value } };
  };
}
