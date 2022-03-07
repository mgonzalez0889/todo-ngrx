import { setFiltro } from './../../filtro/filtro.action';
import { AppState } from './../app.reducer';
import { Store,  } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from 'src/app/filtro/filtro.action';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos','completados', 'pendientes'];

  pendientes: number = 0;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro) => {
    //   this.filtroActual = filtro;
    // });
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  cambiarFiltro(filtro: filtrosValidos) {
    console.log(filtro);

    this.store.dispatch(setFiltro({filtro: filtro}))

  }

  limpiarCompletados() {
    this.store.dispatch(limpiarTodos());
  }

}
