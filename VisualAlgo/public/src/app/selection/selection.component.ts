import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  values = [];

  w = 100;
  sorted = false;
  arr = [0, 0, 0, 0];
  shuffling = -1;
  shuffle = false;
  go = false;

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
        if(this.go==true){

          if(this.sorted == false) {
            this.arr = this.selectionSort(this.arr);
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
          if(this.arr[0] <= 0 + i) {
            s.fill(51);
          }
          else {
            s.fill(0, 128, 0);
          }
          if(this.arr[2] == i) {
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

  selectionSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let temp = arr[2];
    if(this.values[temp] > this.values[j]) {
      temp = j;
    }
    if(i < this.values.length) {
      j += 1;
      if(j > this.values.length - 1) {
        this.swap(this.values, i, temp);
        i += 1;
        j = i;
        temp = i;
      }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = temp;
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
