import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trnsformTime',
})
export class TrnsformTimePipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + 'h ' + minutes + 'm';
  }
}
