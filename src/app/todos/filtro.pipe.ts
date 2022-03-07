import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.action';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    console.log(filtro)

    switch (filtro) {
      case 'complteados':
        return todos.filter(todo => todo.completado);

      case 'pendientes':
        return todos.filter(todo => todo.completado);

      default :
        return todos;

    }

  }

}