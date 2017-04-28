import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatByType'
})
export class FormatByTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const obType = args;
    if (!obType) { return value; }

    switch (obType) {
      case 'count':
        return this.formatComma(value);
      case 'number':
        return this.formatComma(value);
      case 'money':
        return this.formatMoney(value);
      case 'id':
        return this.formatId(value);
    }

    console.log(value, 'none');
    console.log(args);

    return value;
  }

  formatComma(num: string | number): string {
    num = num.toString();
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  formatMoney(num: string | number): string {
    num = this.formatComma(num);
    return '₹ ' + num;
  }

  formatId(id: string): string {
    id = id.toUpperCase();
    id = id.substr(0, 4) + '-' + id.substr(4, 6) + '-' + id.substr(10, 3) + '-' + id.substr(13);

    // 14T4-IIBW3J-20YA4F9

    return id;
  }

}
