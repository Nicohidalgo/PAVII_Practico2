import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreArticulos'
})
export class NombreArticulosPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
        return value;
    }
        return '*'+value+'*';
}

}
