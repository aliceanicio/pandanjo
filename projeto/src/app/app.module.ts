import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { FirstDetailsComponent } from './components/first-details/first-details.component';
import { TextDetailsComponent } from './components/text-details/text-details.component';
import { OtherProductsComponent } from './components/other-products/other-products.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { CalculateButtonComponent } from './components/calculate-button/calculate-button.component';
import { HeartButtonComponent } from './components/heart-button/heart-button.component';
import { StarButtonComponent } from './components/star-button/star-button.component';
import { NewTagComponent } from './components/new-tag/new-tag.component';
import { OffTagComponent } from './components/off-tag/off-tag.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { SizeButtonComponent } from './components/size-button/size-button.component';
import { ColorButtonComponent } from './components/color-button/color-button.component';
import { DropdownToggleComponent } from './components/dropdown-toggle/dropdown-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    FirstDetailsComponent,
    TextDetailsComponent,
    OtherProductsComponent,
    AddToCartButtonComponent,
    CalculateButtonComponent,
    HeartButtonComponent,
    StarButtonComponent,
    NewTagComponent,
    OffTagComponent,
    CarouselItemComponent,
    SizeButtonComponent,
    ColorButtonComponent,
    DropdownToggleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
