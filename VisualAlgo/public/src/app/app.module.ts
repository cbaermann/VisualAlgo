import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { PancakeSortComponent } from './pancake-sort/pancake-sort.component';
import { SelectionComponent } from './selection/selection.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { InsertionComponent } from './insertion/insertion.component';
import { BogoComponent } from './bogo/bogo.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    PancakeSortComponent,
    SelectionComponent,
    CocktailComponent,
    InsertionComponent,
    BogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
