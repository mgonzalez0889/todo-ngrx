import { AppState } from './../app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as actions from '../todo.actions' ;


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()todo!: Todo;
  chkCompletado: FormControl = new FormControl('');
  txtInput: FormControl = new FormControl('');
  @ViewChild('inputFisicio') txtInputFIsico!: ElementRef;

  editando: boolean = true;

  constructor(
    private store: Store<AppState>
  ) {


  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      console.log(valor);
      this.store.dispatch(actions.toogle({id: this.todo.id}));
    })
  }

  editar() {
    this.editando = true;

    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFIsico.nativeElement.select();

    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtInput.invalid) {return;}
    if(this.txtInput.value === this.todo.texto) {return;}

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));

  }

  borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
