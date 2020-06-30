import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminService extends BaseService {
  create(obj) {
    try {
      this.setEndPoint("admin");
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
}
