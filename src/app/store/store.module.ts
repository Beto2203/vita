import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreMainViewComponent } from './views/store-main-view/store-main-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StoreMainViewComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
