import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @Input() id!:number
  tar!:Tarea
  @Output() actualizarTarea = new EventEmitter();
  checkeado:boolean=false;
  inppp:string='';
  des:string='';
  constructor(private todoService: TodoService,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.activatedRoute.params.subscribe(params=>{
    this.id= +params['id'].toString();
    console.log("gg1")
    console.log(this.id);
  });
    this.obtenerTareas();
  }
  obtenerTareas() {
    this.todoService.obtenerTarea().subscribe( params =>{params.forEach(element => {
        if(element.id==this.id){
          this.tar=element;
          this.checkeado=this.tar.hecho
          this.inppp=this.tar.descripcion
          this.des=this.tar.descripcion
          console.log(element)
        }
    }); },
      err => alert('no se pudieron obtener las tareas')
      );
  }
  
  ngOnInit(): void {
  }

  confirmar(){
    console.log(this.checkeado+" gggg "+this.inppp);
    if(this.inppp.length>0){
    this.tar.descripcion=this.inppp
    this.des=this.tar.descripcion
    this.tar.hecho=this.checkeado
    this.todoService.actualizarTarea(this.tar).subscribe(res=>{
      console.log(res)
    })}
  }
  
eliminar(){
  Swal.fire({
    icon: 'warning',
    title: '¿Estas seguro que deseas borrar la tarea "' + this.tar.descripcion+'"?',
    cancelButtonText: 'No borrar',
    confirmButtonText: 'Si, borrar',
    showConfirmButton: true,
    showCancelButton: true
  }).then( value => {
    if(value.isConfirmed) {
      this.todoService.eliminarTarea(this.tar.id).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl("/lista")
  })
    }
  })



}


}