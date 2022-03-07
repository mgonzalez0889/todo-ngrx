import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.action';

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer(
  initialState,
  on( setFiltro, (state, {filtro}) => filtro),
);
