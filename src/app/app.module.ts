import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import {CookingComponent, FilterNames} from './cooking/cooking.component';
import { BakingComponent } from './baking/baking.component';
import { DessertComponent } from './dessert/dessert.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {NgbCollapseConfig, NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarterComponent,
    CookingComponent,
    BakingComponent,
    DessertComponent,
    ContactComponent,
    FilterNames
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
