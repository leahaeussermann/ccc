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
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

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
    FilterDessertNames,
    RecipeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  entryComponents: [RecipeDialogComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
