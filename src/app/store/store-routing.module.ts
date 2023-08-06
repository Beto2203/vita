import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreMainViewComponent } from './views/store-main-view/store-main-view.component';

const routes: Routes = [
  {
    path: '',
    component: StoreMainViewComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
