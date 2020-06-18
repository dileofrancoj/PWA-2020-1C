import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap'
})
export class CapPipe implements PipeTransform {
  // franco jAvIer Di Leo
  // Franco Javier Di Leo
  transform(value: any): any {
    value = value.toLowerCase()
    value = value.trim();
    let nombres = value.split(" ");
    for (let i in nombres) {
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
    }
    return nombres.join(" ");
  }

}
