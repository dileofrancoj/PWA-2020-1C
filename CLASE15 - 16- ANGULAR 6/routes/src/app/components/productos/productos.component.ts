import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos : any [] = [];
  $ : any;
  constructor(private _productosService : ProductosService) { }

  async getAll() {
    let productos :any = await this._productosService.getProducts();
    console.log(productos)    
    for(let key in productos) {
      this.productos.push(productos[key]);
    }
    console.log(this.productos)
  }

  ngOnInit() {
    this.getAll();
  }

}
