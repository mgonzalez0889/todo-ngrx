import { filtrosValidos } from './../filtro/filtro.action';
import { filtroReducer } from './../filtro/filtro.reducer';
import { todoReducer } from './todo.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/todo.model';

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer

}
