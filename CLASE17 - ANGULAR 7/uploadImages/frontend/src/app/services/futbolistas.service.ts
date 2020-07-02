import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FutbolistasService extends BaseService {
  list() {
    try {
      this.setEndPoint("futbolistas");
      console.log(`${this.urlServer}${this.endpoint}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
