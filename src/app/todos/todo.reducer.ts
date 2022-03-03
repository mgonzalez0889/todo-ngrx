import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { crear, toogle, editar } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Hola mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironmar'),
  new Todo('Me llevo el Tecerato!'),
];

export const todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [ ...state, new Todo(texto)  ]),

  on(toogle, (state, {id}) => {

    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }else {
        return todo;
      }

    });

  }),

  on(editar, (state, {id, texto}) => {

    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      }else {
        return todo;
      }

    });

  }),
);


