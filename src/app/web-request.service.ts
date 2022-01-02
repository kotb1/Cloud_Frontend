import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/';
  }

  get() {
    return this.http.get(`${this.ROOT_URL}`);
  }

  post(payload: Object) {
    return this.http.post(`${this.ROOT_URL}`, payload);
  }
  delete(uri:string){
    return this.http.delete(`${this.ROOT_URL}${uri}`);
  }
  patch(uri:string,payload: Object){
    return this.http.patch(`${this.ROOT_URL}${uri}`, payload);
  }
}