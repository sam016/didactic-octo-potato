import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card;
  @HostBinding('class.app-card') enableClass: boolean = true;

  constructor() {
  }

  ngOnInit() {
    const newExtra = {
      value: Math.abs(this.card.extra),
      dir: this.card.extra < 0 ? 'negative' : 'positive'
    };
    this.card.extra = newExtra;
  }

}
