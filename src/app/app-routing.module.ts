import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    component: PrincipalComponent,
    path: '',
  },
  {
    component: InicioComponent,
    path: 'inicio',
  },
  {
    component: Pagina1Component,
    path: 'pagina1',
  },
  {
    component: Pagina2Component,
    path: 'pagina2',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
