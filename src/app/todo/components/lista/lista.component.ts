import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, DoCheck {
  @Input() tareas: Tarea[] = [];
  @Output() eliminarTarea = new EventEmitter();
  @Output() actualizarTarea = new EventEmitter();
  tareasTerminadas = 0;
  constructor() { }

  

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.tareasTerminadas = this.tareas === null ? 0 :  this.tareas?.filter( t => t.hecho).length;
  }

  eliminar(tareaId: number) {
    console.log({tareaId});
    Swal.fire({
      icon: 'warning',
      title: '¿Estas seguro que deseas borrar la tarea ' + tareaId,
      cancelButtonText: 'No borrar',
      confirmButtonText: 'Si, borrar',
      showConfirmButton: true,
      showCancelButton: true
    }).then( value => {
      if(value.isConfirmed) {
        this.eliminarTarea.emit(tareaId);
      }
    })
    
  }
  editar(tareaId: number) {
    console.log({tareaId});
    var tareainterna:Tarea
    
    for (let index = 0; index < this.tareas.length; index++) {
          if(this.tareas[index].id==tareaId){
            tareainterna=this.tareas[index]
          }
        }
    var descripcion=tareainterna!.descripcion
    Swal.fire({
      icon: 'info',
      title: 'Editarás la tarea: ' + descripcion,
      input:'text',
      inputAttributes: {
        placeholder: descripcion
      },
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Terminar edición',
      showConfirmButton: true,
      showCancelButton: true,
      preConfirm: (desc) => {
        if(desc!=""){
        tareainterna.descripcion=desc
        this.actualizarTarea.emit(tareainterna);}
        
      }
    })
    
  }

  seleccionar(tarea: Tarea) {
    this.tareas.forEach( t => {
      if( t.id === tarea.id) {
        t.hecho = !t.hecho
        this.actualizarTarea.emit(t);
      }
    });
    
    console.log(this.tareas);
  }
}
