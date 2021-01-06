import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private baseUrl = 'http://localhost:5000/'; // TODO: Obtain it from the environment

  constructor(private http: HttpClient) { }

  get = <T>(extension, params = null) => {
    return this.http.get<T>(this.baseUrl + extension, this.getParams(params)).pipe(catchError(this.handleError));
  }

  post = <T>(extension, data = {}) => {
    return this.http.post<T>(this.baseUrl + extension, data, this.getParams()).pipe(catchError(this.handleError));
  }

  delete(extension) {
    return this.http.delete(this.baseUrl + extension, this.getParams()).pipe(catchError(this.handleError));
  }

  put<T>(extension, data, params = null) {
    return this.http.put<T>(this.baseUrl + extension, data, this.getParams(params)).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Error');
  }

  private getParams(params = null) {
    if (!params) {
      params = new HttpParams();
    }
    return { params: params };
  }
}
