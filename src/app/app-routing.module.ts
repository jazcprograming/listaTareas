import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './todo/pages/editar/editar.component';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';

const routes: Routes = [
  {path: 'lista', component: ListaPageComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
