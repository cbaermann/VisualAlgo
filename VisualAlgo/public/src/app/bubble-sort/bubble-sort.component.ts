import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {

  values = [];

  w = 100;
  sorted = false;
  arr = [0, 0];
  go = false;
  
  constructor() {}

  ngOnInit() {
    const sketch = (s) => {
      s.preload = () => {
      }

      s.setup = () => {
        s.createCanvas(window.innerWidth - 20, window.innerHeight - 120);
        this.values = new Array(s.floor(s.width / this.w));
        for(let i = 0; i < this.values.length; i++) {
          this.values[i] = s.random(s.height-50);
        }
      }

      s.draw = () => {
        s.background(255);
        if(this.go==true){

          if(this.sorted == false) {
            this.arr = this.bubbleSort(this.arr);
            if(this.arr[0] > this.values.length - 1) {
              this.sorted = true;
            }
          }
        }

        for(let i = 0; i < this.values.length; i++) {
          s.stroke(200);
          if(this.arr[0] < this.values.length - i) {
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

    let canvas = new p5(sketch)
  }



  swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  bubbleSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let a = this.values[j];
    let b = this.values[j + 1];
    if(a > b) {
        this.swap(this.values, j, j + 1);
    };
    if(i < this.values.length) {
        j += 1;
        if(j >= this.values.length - i - 1) {
            j = 0;
            i += 1;
        }
    }
    arr[0] = i;
    arr[1] = j;
    return arr;
  };

  onClick(){
    this.go = true;
  }
}
