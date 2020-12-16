import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  tareas$ = new Observable<Tarea[]>();
  tareas: Tarea[] = [];
  constructor(private todoService: TodoService) {
    this.obtenerTareas();
    console.log("ggggggggg")
    console.log(this.tareas)
   }

  ngOnInit(): void {
  }

  obtenerTareas() {
    this.tareas$ = this.todoService.obtenerTarea()
    this.tareas$.subscribe( params =>{this.tareas = params;console.log("Ghghgh");console.log(params);console.log("gghghg");},
      err => alert('no se pudieron obtener las tareas')
      );
  }

  eliminarTarea(tareaId: number) {
    this.todoService.eliminarTarea(tareaId)
    .subscribe( res => {
      console.log( {res})
      this.obtenerTareas();
    })
  }

  actualizarTarea(tarea: Tarea){
    this.todoService.actualizarTarea(tarea)
    .subscribe( res => {
      console.log('se actualizo la tarea');
    })
  }

}
