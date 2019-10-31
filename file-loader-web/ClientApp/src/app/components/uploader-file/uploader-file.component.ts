import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileLoader } from '../../models/file-loader';
import { ValidatorService, validType } from '../../services/validator/validator.service';
import { IValidationData } from '../../models/validation-data';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'app-uploader-file',
  templateUrl: './uploader-file.component.html',
  styleUrls: ['./uploader-file.component.css'],
  providers: [ValidatorService, FileService]
})
export class UploaderFileComponent implements OnInit, OnChanges, OnDestroy {
  public isLoading = true;
  public fileForm: FormGroup;
  public model = new FileLoader();
  public errorMsg = false;
  public successMsg = false;
  public fileMsg: string;

  private subscription: any[] = [];

  get user() { return this.fileForm.get('user'); }
  get nameError() { return this.fileForm.controls['name'].getError('required'); }
  get sizeError() { return this.fileForm.controls['size'].getError('max'); }
  get typeError() { return this.fileForm.controls['type'].getError('invalidType'); }
  get isValidFileInput(): boolean {
    return this.nameError || this.sizeError || this.typeError
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private fileService: FileService
  ) {
    this.setFileMsg();
  }

  ngOnInit() {
    this.getValidationData();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  ngOnDestroy() {
    this.subscription.forEach(val => val.unsubscribe());
  }

  public selectFile(file: File, e: any): void {
    if (file && file[0]) {
      this.fileForm.patchValue({ name: file[0].name });
      this.fileForm.patchValue({ type: file[0].type });
      this.fileForm.patchValue({ size: file[0].size });

      if (this.validatorService.isValidFile(file[0])) {
        this.setFileMsg(file[0].name);
      } else if (e && e.target) {
        e.target.value = null;
        this.setFileMsg();
      }
      this.fileForm.markAsTouched();
    }
  };

  public onSubmit() {
    if (this.fileForm.valid) {
      this.isLoading = true;
      this.prepareModel();
      this.subscription.push(
        this.fileService.sendFileMetadata(this.model)
          .subscribe(
            file => {
              this.showMsg(false);
              this.model = new FileLoader(file);
              this.rebuildForm();
            },
            error => {
              this.showMsg();
              this.model = new FileLoader();
              this.rebuildForm();
            }
          )
      );
    } else {
      this.showMsg();
    }
  }

  public dismissAllAlert(): void {
    this.errorMsg = false;
    this.successMsg = false;
  }

  private showMsg(isError = true): void {
    this.isLoading = false;
    if (isError) {
      this.setFileMsg();
      this.errorMsg = true;
      this.successMsg = false;
    } else {
      this.errorMsg = false;
      this.successMsg = true;
    }
  }

  private getValidationData(): void {
    this.subscription.push(
      this.validatorService.getValidationData()
        .subscribe(
          data => {
            this.createForm(data);
          },
          err => {
            this.showMsg();
          })
    );
  }

  private setFileMsg(msg = 'Choose file'): void {
    this.fileMsg = msg;
  }

  private createForm(validation: IValidationData) {
    this.model = new FileLoader();
    this.fileForm = this.fb.group({
      name: [this.model.name, Validators.required],
      size: [this.model.size, Validators.max(validation.size)],
      type: [this.model.type, validType(validation)],
      date: [this.model.date, Validators.required],
      user: [this.model.user, Validators.required]
    });
    this.isLoading = false;
  }

  private rebuildForm() {
    this.fileForm.reset({
      name: this.model.name,
      size: this.model.size,
      type: this.model.type,
      date: this.model.date,
      user: this.model.user
    });
  }

  private prepareModel(): void {
    const val = this.fileForm.value;
    this.model.name = val.name;
    this.model.size = +val.size;
    this.model.type = val.type;
    this.model.date = new Date();
    this.model.user = val.user;
  }
}
