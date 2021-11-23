import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AccountService } from '../_services';

@Component({
  templateUrl: 'order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  orders: any;
  temp: any;
  userId: string;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = JSON.parse(localStorage.getItem('user')).data._id;
  }
  ngOnInit() {
    this.accountService
      .getAllOrders(this.userId)
      .pipe(first())
      .subscribe((responsePro) => {
        console.log('HERE', this.userId, responsePro);

        this.temp = responsePro;
        this.orders = this.temp.data;
        for (let x in this.orders) {
          this.orders[x].createdAt = moment(this.orders[x].createdAt).format(
            'LLLL'
          );
        }
      });
  }
}
