import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/paginas/inicio/inicio.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardapioBaseComponent } from './core/paginas/cardapio-base/paginas/cardapio-base.component';
import { PizzaComponent } from './core/paginas/cardapio-base/components/pizza/pizza.component';
import { BebidaComponent } from './core/paginas/cardapio-base/components/bebida/bebida.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardapioBaseComponent,
    PizzaComponent,
    BebidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ModalModule.forRoot()

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
