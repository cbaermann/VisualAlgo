import { Component } from '@angular/core';
import {Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(private _router: Router){}

  changeAlgo($event){
    console.log($event.target.value)
    console.log($event.target.value.toLowerCase())
    this._router.navigate(['/'+ $event.target.value.toLowerCase()])
    // this._router.navigate(['/pancake'])
  }
}

