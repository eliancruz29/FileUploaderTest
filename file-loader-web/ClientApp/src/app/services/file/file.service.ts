import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { FileLoader } from 'src/app/models/file-loader';
import { IFileTables } from 'src/app/models/file-tables';

@Injectable()
export class FileService {
  private readonly url = `${env.apiBaseUrl}/api/file`;

  constructor(
    private http: HttpClient,
  ) { }

  public getFileMetadata(): Observable<IFileTables[]> {
    return this.http.get<IFileTables[]>(this.url);
  }

  public sendFileMetadata(model: FileLoader): Observable<FileLoader> {
    return this.http.post<FileLoader>(this.url, model);
  }
}
