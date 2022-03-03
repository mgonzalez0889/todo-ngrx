import * as action from './../todo.actions';
import { AppState } from './../app.reducer';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl = new FormControl('', Validators.required  );
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  agregar() {
    console.log(this.txtInput.value)

    if(this.txtInput.invalid) {return}

    this.store.dispatch(action.crear({texto: this.txtInput.value}));

    this.txtInput.reset();

  }

}