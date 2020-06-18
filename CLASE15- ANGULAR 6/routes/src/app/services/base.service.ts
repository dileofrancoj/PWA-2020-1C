import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer : string = environment.url
  endpoint = "";
  constructor(private http: HttpClient) { }

  private getHttpHeaders() {
    let httpOptions = {};
    httpOptions = {
      headers : new HttpHeaders({
        'Content-type' : 'Application/json'
      })
    }
    return httpOptions;
  }

  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }

  async get() {
    try {
      const options = this.getHttpHeaders();
      // https://productos-b22e5.firebaseio.com/productos.json
      return await this.http.get(`${this.urlServer}${this.endpoint}.json`,options).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
