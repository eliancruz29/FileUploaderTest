import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { FileLoader } from 'src/app/models/file-loader';

@Injectable()
export class FileService {

  constructor(
    private http: HttpClient,
  ) { }

  public sendFileMetadata(model: FileLoader): Observable<FileLoader> {
    const url = `${env.apiBaseUrl}/api/file`;
    return this.http.post<FileLoader>(url, model);
  }
}
