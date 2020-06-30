import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  urlServer = environment.url;
  endpoint = "";

  constructor(protected http: HttpClient, protected router: Router) {}

  private getHttpOptions() {
    let httpOptions = {};
    if (sessionStorage.getItem("JWT")) {
      httpOptions = {
        headers: new HttpHeaders({
          Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("JWT")),
        }),
      };
    } else {
    }
    return httpOptions;
  }

  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }
  async get(queryParams: string = null) {
    try {
      const options = this.getHttpOptions();
      return await this.http
        .get(this.urlServer + this.endpoint, options)
        .toPromise();
    } catch (error) {
      if (error.status === 401) {
        this.procesarRespuestaError();
      }
    }
  }

  async delete(queryParams: string = null) {
    try {
      const options = this.getHttpOptions();
      return await this.http
        .delete(this.urlServer + this.endpoint, options)
        .toPromise();
    } catch (error) {
      if (error.status === 401) {
        this.procesarRespuestaError();
      }
    }
  }

  async post(obj) {
    try {
      // const options = this.getHttpOptions();
      // console.log("se envia a : ", this.urlServer + this.endpoint);
      return this.http.post(this.urlServer + this.endpoint, obj).toPromise();
    } catch (error) {
      if (error.status === 401) {
        this.procesarRespuestaError();
      }
    }
  }

  async put(obj) {
    try {
      const options = this.getHttpOptions();
      return this.http
        .put(this.urlServer + this.endpoint, obj, options)
        .toPromise();
    } catch (error) {
      if (error.status === 401) {
        this.procesarRespuestaError();
      } else {
        throw error;
      }
    }
  }

  procesarRespuestaError() {
    try {
      sessionStorage.clear();
      this.router.navigate(["/login"]);
      return;
    } catch (error) {
      throw error;
    }
  }
}
