import { ProductoModule } from './components/producto/producto.module';
import { ProductosModule } from './components/productos/productos.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { LoginModule } from './components/login/login.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// bcrypt

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    DashboardModule,
    ProductosModule,
    ProductoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
