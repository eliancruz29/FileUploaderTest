import { async, ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';

import { UploaderFileComponent } from './uploader-file.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { FileService } from 'src/app/services/file/file.service';
import { AlertComponent } from 'src/app/widgets/alert/alert.component';
import { LoadingComponent } from 'src/app/widgets/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { VALIDATION } from 'src/app/test-mocks/services/validator/mock-validator.service';
import { of } from 'rxjs';

describe('UploaderFileComponent', () => {
  let component: UploaderFileComponent;
  let fixture: ComponentFixture<UploaderFileComponent>;
  let validatorService: ValidatorService;
  let fileService: FileService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploaderFileComponent,
        AlertComponent,
        LoadingComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderFileComponent);
    component = fixture.componentInstance;
    validatorService = fixture.debugElement.injector.get(ValidatorService);
    fileService = fixture.debugElement.injector.get(FileService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with a loading variable to TRUE', () => {
    expect(component.isLoading).toBeTruthy();
  });

  it('should start with a input file Msg', () => {
    expect(component.fileMsg).toBe("Choose file");
  });

  it('form invalid when empty', () => {
    spyOn(validatorService, 'getValidationData').and.returnValue(of(VALIDATION));

    fixture.detectChanges();
    expect(component.fileForm.valid).toBeFalsy();
  });

  it('form control name field validity', () => {
    spyOn(validatorService, 'getValidationData').and.returnValue(of(VALIDATION));

    fixture.detectChanges();
    let name = component.fileForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // name field is required
    let errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set name to something
    name.setValue("Prueba");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('form control size field validity', () => {
    spyOn(validatorService, 'getValidationData').and.returnValue(of(VALIDATION));

    fixture.detectChanges();
    let size = component.fileForm.controls['size'];
    expect(size.valid).toBeTruthy();

    // size field is required
    let errors = size.errors || {};
    expect(errors['max']).toBeFalsy();

    // Set size to something
    size.setValue(3097152);
    errors = size.errors || {};
    expect(errors['max']).toBeTruthy();

    // Set size to something
    size.setValue(1097152);
    errors = size.errors || {};
    expect(errors['max']).toBeFalsy();
  });

  it('form control type field validity', () => {
    spyOn(validatorService, 'getValidationData').and.returnValue(of(VALIDATION));

    fixture.detectChanges();
    let type = component.fileForm.controls['type'];
    expect(type.valid).toBeFalsy();

    // size field is required
    let errors = type.errors || {};
    expect(errors['invalidType']).toBeTruthy();

    // Set size to something
    type.setValue('image/jpeg');
    errors = type.errors || {};
    expect(errors['invalidType']).toBeTruthy();

    // Set size to something
    type.setValue('application/pdf');
    errors = type.errors || {};
    expect(errors['invalidType']).toBeFalsy();
  });
});
