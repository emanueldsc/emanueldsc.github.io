import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconClass'
})
export class IconClassPipe implements PipeTransform {

  transform(value: string | undefined): string | '' {
    if (typeof value == 'string')
      return `pi pi-${value}`;
    return ''
  }

}
