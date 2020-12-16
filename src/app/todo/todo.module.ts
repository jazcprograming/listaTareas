import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaComponent } from './components/lista/lista.component';
import {MatListModule} from '@angular/material/list';
import { TodoService } from './services/todo.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EditarComponent } from './pages/editar/editar.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent, EditarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterModule
  ],
  exports: [
    ListaPageComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }
