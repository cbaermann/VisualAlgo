import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  values = [];

  w = 100;
  sorted = false;
  arr = [0, 0, 0, 0];
  go = false;

  constructor() { }

  ngOnInit() {
    const sketch = (s) => {
      s.preload = () => {

      }

      s.setup = () => {
        s.createCanvas(window.innerWidth - 16, window.innerHeight - 120);
        this.values = new Array(s.floor(s.width / this.w));
        for(let i = 0; i < this.values.length; i++) {
          this.values[i] = s.random(s.height - 50);
        }
      }

      s.draw = () => {
        s.background(200);
        if(this.go==true){

          if(this.sorted == false) {
            this.arr = this.cocktailSort(this.arr);
            if(this.arr[0] > this.values.length / 2) {
              this.sorted = true;
            }
          }
        }

        for(let i = 0; i < this.values.length; i++) {
          s.stroke(200);
          if(this.arr[0] < this.values.length - i && this.arr[3] <= i) {
            s.fill(51);
          }
          else {
            s.fill(0, 128, 0);
          }
          if(this.arr[1] == i && this.arr[0] < this.values.length - i) {
            s.fill(128, 0, 0);
          }
          s.rect(i * this.w, s.height - this.values[i], this.w, this.values[i]);
        }
      }
    }

    let canvas = new p5(sketch);
  }

  ngOnDestroy(){
    document.querySelector("canvas").remove()
  }

  swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  cocktailSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let dir = arr[2];
    let color = arr[3];
    if(dir == 0) {
      let a = this.values[j];
      let b = this.values[j + 1];
      if(a > b) {
        this.swap(this.values, j, j + 1);
      };
      if(i < this.values.length / 2) {
        j += 1;
        if(j >= this.values.length - i - 1) {
          i += 1;
          dir = 1;
        }
      }
    }
    if(dir == 1) {
      let a = this.values[j];
      let b = this.values[j - 1];
      if(a < b) {
        this.swap(this.values, j, j - 1);
      };
      if(i < this.values.length / 2) {
        j -= 1;
        if(j <= -1 + i) {
          color += 1;
          dir = 0;
        }
      }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = dir;
    arr[3] = color;
    return arr;
};
onClick(){
  this.go = true;
}

}
