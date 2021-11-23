import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { AccountService } from '../_services';

@Component({
  templateUrl: 'singleOffer.component.html',
  styleUrls: ['./singleOffer.component.css'],
})
export class SingleOfferComponent {
  offerId: any;
  offerData: any;
  temp: any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.url.pipe(first()).subscribe((wow) => {
      this.offerId = wow[1].path;
    });
    this.accountService
      .getSingleOffer(this.offerId)
      .pipe(first())
      .subscribe((responsePro) => {
        this.temp = responsePro;
        this.offerData = this.temp.data;
      });
  }
}
