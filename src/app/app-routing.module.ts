import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/paginas/inicio/inicio.component';
import { CardapioBaseComponent } from './core/paginas/cardapio-base/paginas/cardapio-base.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'cardapio',
    component: CardapioBaseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
