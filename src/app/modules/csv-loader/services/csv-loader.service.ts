import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvLoaderService {
  private apiUrl = 'http://localhost:8080/carga-archivos/api/campania';

  constructor(private http: HttpClient) { }

  uploadCsv(formData: FormData) {
    return this.http.post(this.apiUrl.concat('/upload'), formData);
  }

  findAll() {
    return this.http.get(this.apiUrl);
  }

  grouped() {
    return this.http.get(this.apiUrl.concat('/grouped'));
  }

}
