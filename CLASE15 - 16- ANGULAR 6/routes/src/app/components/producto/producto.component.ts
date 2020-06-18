import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id : any;
  producto : any;
  constructor(private productosService : ProductosService,
              private activatedRoute : ActivatedRoute) { }

  async getSingle(id) {
    let producto = await this.productosService.getProduct(id);
    console.log(producto)
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getSingle(this.id);

  }

}
