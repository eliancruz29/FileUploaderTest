import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileLoader } from 'src/app/models/file-loader';
import { IFileTables } from 'src/app/models/file-tables';

@Injectable()
export class FileMockService {

  constructor() { }

  public getFileMetadata(): Observable<IFileTables[]> {
    return of([
      {
        type: 'application/pdf',
        files: [
          new FileLoader('Name 1', 150000, 'application/pdf', 'User 1'),
          new FileLoader('Name 2', 100000, 'application/pdf', 'User 2'),
          new FileLoader('Name 3', 50000, 'application/pdf', 'User 3')
        ]
      } as IFileTables,
      {
        type: 'application/msword',
        files: [
          new FileLoader('Name 4', 230000, 'application/msword', 'User 4'),
          new FileLoader('Name 5', 180000, 'application/msword', 'User 5'),
          new FileLoader('Name 6', 80000, 'application/msword', 'User 6')
        ]
      } as IFileTables
    ]);
  }

  public sendFileMetadata(model: FileLoader): Observable<FileLoader> {
    return of(model);
  }
}
