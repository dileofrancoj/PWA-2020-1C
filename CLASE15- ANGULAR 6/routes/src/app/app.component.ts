import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showHeader : boolean = false;
  constructor(private router : Router,
              private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      // si termino de cargar la ruta correctamente
      // console.log(event);
      if(event instanceof NavigationEnd) {
        // console.log("termino de cargar el elemento")
        // this.showHeader = this.activatedRoute.firstChild.snapshot.data;
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader

      }
    })
  }
}
