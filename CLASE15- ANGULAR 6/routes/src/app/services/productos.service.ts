import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService{
  getProducts () {
    try {
      this.setEndPoint('productos');
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  getProduct(id) {
    try {
      this.setEndPoint(`productos/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
