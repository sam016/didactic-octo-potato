import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  sections = {
    summary: {
      title: 'Quick Summary'
      , cards: [
        {
          title: 'Today\'s orders'
          , type: 'count'
          , value: 120
          , extra: -9
        }
        , {
          title: 'Monthly orders'
          , type: 'count'
          , value: 4180
          , extra: 687
        }
        , {
          title: 'Today\'s profit'
          , type: 'money'
          , value: 17543
          , extra: -894
        }
        , {
          title: 'Monthly profit'
          , type: 'money'
          , value: 45223
          , extra: 3205
        }
        , {
          title: 'Loan'
          , type: 'money'
          , value: 45223
          , extra: 3205
        }
        , {
          title: 'Total'
          , type: 'money'
          , value: 789123
          , extra: 90857
        }
      ]
    }
  };

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Resto POS');

  }

}

// sections = {
//     'summary': {
//       title: 'Quick Summary'
//       , cards: {
//         'orders': {
//           title: 'Orders'
//           , type: 'count'
//           , value: 12
//           , extra: 12
//         }
//         , 'profitToday': {
//           title: 'Today\'s profit'
//           , type: 'money'
//           , value: 2761
//           , extra: -894
//         }
//         , 'profitMonthly': {
//           title: 'Monthly profit'
//           , type: 'money'
//           , value: 45223
//           , extra: 3205
//         }
//         , 'total': {
//           title: 'Total'
//           , type: 'money'
//           , value: 789123
//           , extra: 90857
//         }
//       }
//     }
//   };
