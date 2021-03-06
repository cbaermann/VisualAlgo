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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuickComponent } from './quick/quick.component';
import { MaxheapComponent } from './maxheap/maxheap.component';

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    PancakeSortComponent,
    SelectionComponent,
    CocktailComponent,
    InsertionComponent,
    BogoComponent,
    HomeComponent,
    AboutComponent,
    QuickComponent,
    MaxheapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
