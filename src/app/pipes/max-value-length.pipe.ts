import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
})
export class MaxValueLengthPipe implements PipeTransform {
  transform(value: number, maxLenght: number): unknown {
    let valueLenght: number = value.toString().length;

    if (valueLenght > maxLenght) {
      value = Number(value.toString().split('').splice(0, maxLenght).join(''));
    }

    return value;
  }
}
