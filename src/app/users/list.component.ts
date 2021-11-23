import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AccountService } from '@app/_services';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: any;
  temp: any;
  userId: any;
  orderForm: FormGroup;
  total_qty: number = 0;
  total_price: number = 0;
  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  date = new Date();
  options: DatepickerOptions = {
    calendarClass: 'datepicker-blue',
    scrollBarColor: '#ffffff',
  };
  ngOnInit() {
    this.accountService
      .getAllProducts()
      .pipe(first())
      .subscribe((responsePro) => {
        this.temp = responsePro;
        this.products = this.temp.data;
        this.products.map((item) => {
          item.quantity = 0;
          return item;
        });
      });
    this.orderForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      discountSlab: new FormControl(null),
      discountPercent: new FormControl(null),
      quantity: new FormControl(null),
    });
    this.userId = JSON.parse(localStorage.getItem('user')).data._id;
  }

  onOrderSubmit() {
    let cart = {
      user: this.userId,
      product: this.products,
      total: this.total_price,
    };
    this.accountService
      .saveOrder(cart)
      .pipe(first())
      .subscribe((responsePro) => {
        this.router.navigate([`../orders`], {
          relativeTo: this.route,
        });
      });

    console.log('this.products ==>', cart);
  }
  handelQuantity() {
    this.total_qty = 0;
    this.total_price = 0;
    this.products.map((item) => {
      this.total_qty += item.quantity ? item.quantity : 0;
      this.total_price +=
        Number(item.quantity ? item.quantity : 0) *
        Number(item.price ? item.price : 0);
    });
  }
}
