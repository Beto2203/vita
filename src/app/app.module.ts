import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    NgxSpinnerModule,
    StoreModule,
    SharedModule,
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
