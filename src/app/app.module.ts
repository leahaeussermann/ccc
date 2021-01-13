import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FilterNamesStarter, StarterComponent} from './starter/starter.component';
import {CookingComponent, FilterNames} from './cooking/cooking.component';
import {BakingComponent, FilterBakingNames} from './baking/baking.component';
import {DessertComponent, FilterDessertNames} from './dessert/dessert.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarterComponent,
    CookingComponent,
    BakingComponent,
    DessertComponent,
    ContactComponent,
    FilterNames,
    FilterNamesStarter,
    FilterBakingNames,
    FilterDessertNames
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
