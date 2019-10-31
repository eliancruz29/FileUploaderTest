import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesViewerComponent } from './files-viewer.component';
import { AlertComponent } from 'src/app/widgets/alert/alert.component';
import { LoadingComponent } from 'src/app/widgets/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from 'src/app/services/file/file.service';
import { FileMockService } from 'src/app/test-mocks/services/file/file-mock.service';
import { TableComponent } from 'src/app/widgets/table/table.component';
import { BytesPipe } from 'src/app/pipes/bytes.pipe';

describe('FilesViewerComponent', () => {
  let component: FilesViewerComponent;
  let fixture: ComponentFixture<FilesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilesViewerComponent,
        AlertComponent,
        LoadingComponent,
        TableComponent,
        BytesPipe
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: FileService, useValue: FileMockService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
