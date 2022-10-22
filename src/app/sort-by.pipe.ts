import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], column: string = ''): any[] {
    var sorted = value.sort((a, b) => a.column.localeCompare(b.column));
    return sorted;
  }
}
