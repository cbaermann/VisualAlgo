import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { PancakeSortComponent } from './pancake-sort/pancake-sort.component';
import { BogoComponent } from './bogo/bogo.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { InsertionComponent } from './insertion/insertion.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path : 'bubble', component : BubbleSortComponent },
  { path : 'pancake', component : PancakeSortComponent },
  { path : 'bogo', component : BogoComponent },
  { path : 'cocktail', component : CocktailComponent },
  { path : 'insertion', component : InsertionComponent },
  { path : 'selection', component : SelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }