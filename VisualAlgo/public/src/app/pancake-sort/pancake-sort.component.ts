import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-pancake-sort',
  templateUrl: './pancake-sort.component.html',
  styleUrls: ['./pancake-sort.component.css']
})
export class PancakeSortComponent implements OnInit {

  values = [];

  w = 100;
  sorted = false;
  arr = [0, 0, 0, 0];
  shuffling = 0;
  shuffle = false;

  constructor() { }

  ngOnInit() {
    this.onShuffle();
    const sketch = (s) => {
      s.preload = () => {

      }

      s.setup = () => {
        s.createCanvas(window.innerWidth - 20, window.innerHeight - 120);
        this.values = new Array(s.floor(s.width / this.w));
        for(let i = 0; i < this.values.length; i++) {
          this.values[i] = s.random(s.height - 50);
        }
        this.shuffling = this.values.length - 1;
      }

      s.draw = () => {
        s.background(255);
        if(this.sorted == false) {
          this.arr = this.pancakeSort(this.arr);
          if(this.arr[0] > this.values.length - 1) {
            this.sorted = true;
          }
        }
        if(this.shuffle == true) {
          this.arr = [0, 0, 0, 0];
          this.shuffling = this.shuf(this.shuffling);
          if(this.shuffling == 0) {
            this.shuffling = this.values.length - 1;
            this.sorted = false;
            this.shuffle = false;
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
          if(this.arr[2] == i && this.arr[0] < this.values.length - i) {
            s.fill(128, 0, 0);
          }
          s.rect(i * this.w, s.height - this.values[i], this.w, this.values[i]);
        }
        
      }
    }

    let canvas = new p5(sketch);
  }

  pancakeSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let max = arr[2];
    let flipped = arr[3];
    if(flipped == 0) {
      if(this.values[max] < this.values[j]) {
        max = j;
      }
      if(i < this.values.length) {
        j += 1;
        if(j >= this.values.length - i) {
          j = 0;
          this.flipSection(this.values, 0, max);
          flipped = 1;
          max = 0;
        }
      }
    }
    else {
      this.flipSection(this.values, 0, this.values.length - 1 - i);
      i += 1;
      flipped = 0;
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = max;
    arr[3] = flipped;
    return arr;
  };

  flipSection(arr, a, b) {
    for(let i = a; i < b / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[b - i];
        arr[b - i] = temp;
    }
  }

  shuf(val) {
    let j = Math.floor(Math.random() * val + 1);
    let tempVal = this.values[j];
    this.values[j] = this.values[val];
    this.values[val] = tempVal;
    val -= 1;
    return val;
  }

  onShuffle() {
    this.shuffle = true;
  }
}