import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiCheckModule } from '../components/api-check/api-check.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCatalogModule } from '../components/shopping-catalog/shopping-catalog.module';
import { SupplyRequestFormModule } from '../components/supply-request-form/supply-request-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    ApiCheckModule,
    ShoppingCatalogModule,
    SupplyRequestFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
