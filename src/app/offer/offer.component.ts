import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { AccountService } from '../_services';

@Component({
  templateUrl: 'offer.component.html',
  styleUrls: ['./offer.component.css'],
  selector: 'offer-comp',
})
export class OfferComponent {
  offer: any;
  temp: any;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.accountService
      .getAllOffers()
      .pipe(first())
      .subscribe((responsePro) => {
        console.log(responsePro);
        // this.products = responsePro.data;
        this.temp = responsePro;
        this.offer = this.temp.data;
      });
  }
  getOffer(e) {
    this.router.navigate([`../singleOffer/${e._id}`], {
      relativeTo: this.route,
    });
  }
}
