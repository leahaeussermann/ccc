import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StarterComponent} from './starter/starter.component';
import {CookingComponent} from './cooking/cooking.component';
import {BakingComponent} from './baking/baking.component';
import {DessertComponent} from './dessert/dessert.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'starter', component: StarterComponent},
  {path: 'cooking', component: CookingComponent},
  {path: 'baking', component: BakingComponent},
  {path: 'dessert', component: DessertComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
