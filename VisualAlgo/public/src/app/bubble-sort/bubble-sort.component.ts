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
  arr = [0, 0, 0, 0];
  shuffling = -1;
  shuffle = false;
  go = false;
  
  constructor() {}

  ngOnInit() {
    // this.onShuffle();
    const sketch = (s) => {
      s.preload = () => {
      }

      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight - 120);
        this.values = new Array(s.floor(s.width / this.w));
        for(let i = 0; i < this.values.length; i++) {
          this.values[i] = s.random(s.height-50);
        }
        this.shuffling = this.values.length - 1;
      }

      s.draw = () => {
        s.background(200);
        if(this.go==true){

          if(this.sorted == false) {
            this.arr = this.bubbleSort(this.arr);
            if(this.arr[0] > this.values.length - 1) {
              this.sorted = true;
            }
          }
        }
        if(this.shuffle == true) {
          this.arr = [0, 0, 0, 0];
          this.shuffling = this.shuf(this.shuffling);
          if(this.shuffling == -1) {
            this.shuffling = this.values.length - 1;
            this.sorted = false;
            this.shuffle = false;
            this.go = false;
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

  ngOnDestroy(){
    document.querySelector("canvas").remove()
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

  onClick(){
    this.go = true;
  }
}
