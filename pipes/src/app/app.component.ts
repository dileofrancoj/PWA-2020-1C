import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre_completo = "Franco javier di Leo";
  pipe_usuario : string = 'EUR'
  title = 'pipes';
  nombre : string ="franco";
  nombre_upper : string = "FRANCO"
  PI = Math.PI;
  date = "2020-06-18 11:38:27"
  sueldo = 1245.4
  vec_slice = ["franco","es","un","salame"]
}
