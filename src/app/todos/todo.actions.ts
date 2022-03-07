import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] crea todo',
  props<{texto: string}>()
);

export const toogle = createAction(
  '[TODO] Toogle Todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

// toggleAll
export const  toggleAll = createAction(
    '[TODO] toggleAll',
    props<{completado: boolean}>()
);

// limpiar
export const  limpiarTodos = createAction(
    '[TODO] limpiar TODOS'
);
