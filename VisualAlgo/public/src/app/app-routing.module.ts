import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { PancakeSortComponent } from './pancake-sort/pancake-sort.component';
import { BogoComponent } from './bogo/bogo.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { InsertionComponent } from './insertion/insertion.component';
import { SelectionComponent } from './selection/selection.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuickComponent } from './quick/quick.component';
import { MaxheapComponent } from './maxheap/maxheap.component';

const routes: Routes = [
  { path : 'bubble', component : BubbleSortComponent },
  { path : 'pancake', component : PancakeSortComponent },
  { path : 'bogo', component : BogoComponent },
  { path : 'cocktail', component : CocktailComponent },
  { path : 'insertion', component : InsertionComponent },
  { path : 'selection', component : SelectionComponent },
  { path: 'about', component: AboutComponent},
  { path : 'quick', component : QuickComponent },
  { path : 'maxheap', component : MaxheapComponent },
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
