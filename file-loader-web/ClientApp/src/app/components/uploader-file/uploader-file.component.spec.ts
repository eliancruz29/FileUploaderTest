import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderFileComponent } from './uploader-file.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { ValidatorMockService } from 'src/app/test-mocks/services/validator/validator-mock.service';
import { FileService } from 'src/app/services/file/file.service';
import { FileMockService } from 'src/app/test-mocks/services/file/file-mock.service';
import { AlertComponent } from 'src/app/widgets/alert/alert.component';
import { LoadingComponent } from 'src/app/widgets/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';

describe('UploaderFileComponent', () => {
  let component: UploaderFileComponent;
  let fixture: ComponentFixture<UploaderFileComponent>;

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
        FormBuilder,
        { provide: ValidatorService, useValue: ValidatorMockService },
        { provide: FileService, useValue: FileMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
