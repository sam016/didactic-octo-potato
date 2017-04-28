import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RestOrder } from '../rest-order';
import { RestMenu } from '../rest-menu';

@Injectable()
export class RestService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private webServiceUrl = 'http://localhost:3000/api';  // URL to web api
  private endpoints = {
    orders: '/order',
    order_detail: '/order/:id',
    menus: '/menu'
  }

  constructor(private http: Http) {
    if (location.host.match('localhost(:\d+)?')) {
      this.webServiceUrl = 'http://localhost:3000/api';
    } else {
      this.webServiceUrl = '/api';
    }
  }

  getOrders(): Promise<RestOrder[]> {
    return this.http.get(this.webServiceUrl + this.endpoints.orders)
      .toPromise()
      .then((response) => {
        const orders = response.json().result as RestOrder[];
        orders.forEach(order => {
          order.ItemsCount = order.Items.length;
        });
        return orders;
      })
      .catch(this.handleError);
  }

  getOrder(id: string): Promise<RestOrder> {
    const url = this.webServiceUrl + this.endpoints.order_detail.replace(/:id/g, id);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().result as RestOrder)
      .catch(this.handleError);
  }

  getMenus(): Promise<RestMenu[]> {
    const url = this.webServiceUrl + this.endpoints.menus;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().result as RestMenu[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
