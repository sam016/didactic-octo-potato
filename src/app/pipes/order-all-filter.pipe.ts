import { Pipe, PipeTransform } from '@angular/core';
import { RestOrder } from "app/rest-order";

@Pipe({
  name: 'orderAllFilter'
})
export class OrderAllFilterPipe implements PipeTransform {

  transform(value: RestOrder[], args?: any): any {
    const filters = args;

    console.log(filters);

    if (filters.receiptId.trim()
      || filters.dateFrom
      || filters.dateTo) {

      const filtered = value.forEach(order => {
        return order.ID.indexOf(filters.receiptId);
      });

      console.log(filtered);

      return filtered;
    }
    return value;
  }

}
