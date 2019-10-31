import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileService } from 'src/app/services/file/file.service';
import { tap } from 'rxjs/operators';
import { IFileTables } from 'src/app/models/file-tables';

@Component({
  selector: 'app-files-viewer',
  templateUrl: './files-viewer.component.html',
  styleUrls: ['./files-viewer.component.css'],
  providers: [FileService]
})
export class FilesViewerComponent implements OnInit, OnDestroy {
  public isLoading = true;
  public data: IFileTables[];
  public errorMsg = false;

  private subscription: any[] = [];

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.subscription.forEach(val => val.unsubscribe());
  }

  public dismissAllAlert(): void {
    this.errorMsg = false;
  }

  private getData(): void {
    this.subscription.push(
      this.fileService.getFileMetadata()
        .pipe(tap(_ => {
          this.isLoading = false;
          this.errorMsg = false;
        }))
        .subscribe(
          data => {
            this.data = data;
          },
          err => {
            this.errorMsg = true;
          })
    );
  }
}
