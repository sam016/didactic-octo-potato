import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestService } from 'app/services/rest.service';
import { RestOrder } from 'app/rest-order';

@Component({
  selector: 'app-order-all',
  templateUrl: './order-all.component.html',
  styleUrls: ['./order-all.component.scss'],
  providers: [RestService]
})
export class OrderAllComponent implements OnInit {

  orders: RestOrder[];
  filters: IFilter;
  isRefreshing: boolean = false;

  constructor(private titleService: Title, private restService: RestService) {
    this.titleService.setTitle('Order');
    this.filters = {
      receiptId: '',
      dateFrom: null,
      dateTo: null
    };
    this.refresh();
  }

  ngOnInit() {
  }

  public resetFilters() {
    this.filters.receiptId = '';
    this.filters.dateFrom = null;
    this.filters.dateTo = null;
  }

  private refresh() {
    if (this.isRefreshing) { return; }

    this.restService
      .getOrders()
      .then((orders) => {
        this.orders = orders;
        this.isRefreshing = false;
      })
      .catch((err) => {
        console.error('Error occured whlie getting orders');
        console.error(err);
        this.isRefreshing = false;
      })
  }
}

interface IFilter {
  receiptId: string;
  dateFrom: Date;
  dateTo: Date;
}
