import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { DatepickerModule } from 'ng2-datepicker';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    DatepickerModule,
  ],
  declarations: [LayoutComponent, ListComponent],
})
export class UsersModule {}
