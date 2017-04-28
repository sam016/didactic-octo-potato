import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  @Input() headers: string | string[] | Header[];

  constructor() {
  }

  ngOnInit() {
    this.updateHeaders();
  }

  updateHeaders() {
    let headers: string[];

    if (this.headers) {
      if (typeof this.headers === 'string') {
        headers = this.headers.split(/,/g).map(h => h.trim()) as string[];
      }
    } else {
      if (this.data && this.data.length > 0) {
        headers = Object.keys(this.data[0]);
      }
    }

    this.headers = headers.map(header => new Header(header));
  }

}

class Header {
  alias: string;
  key: string;
  constructor(header: string) {
    const parts = header.split('[as]');

    this.key = parts[0].trim();

    this.alias = (parts.length > 1 ? parts[1] : parts[0]).trim();
  }
}