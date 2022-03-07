
import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes' | any;

export const setFiltro = createAction(
  '[FILTRO] Set filtro',
   props<{ filtro: filtrosValidos }>()
);
