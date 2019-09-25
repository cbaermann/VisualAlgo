import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

  values = [];
  states = [];

  w = 10;
  sorted = false;
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
        if(this.go == true) {
          this.quickSort(this.values, 0, this.values.length - 1);
          this.go = false;
        }
        if(this.shuffle == true) {
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
          s.fill(51);
          if(this.states[i] == 0) {
              s.fill(128, 0, 0);
          }
          else {
              s.fill(51)
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

  async swap(arr, a, b) {
    await this.sleep(25)
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
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

  onClick(){
    this.go = true;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async quickSort(arr, start, end) {
    if(start >= end) {
      return;
    }
    let index = await this.partition(arr, start, end);
    this.states[index] = -1;
    await Promise.all([
      this.quickSort(arr, start, index - 1), 
      this.quickSort(arr, index + 1, end)
    ]);
  }

  async partition(arr, start, end) {
    for(let i = start; i < end; i++) {
      this.states[i] = 1;
    }

    let index = start;
    let pivot = arr[end];
    this.states[index] = 0;
    for(let i = start; i < end; i++) {
      if(arr[i] < pivot) {
        await this.swap(arr, i, index);
        this.states[index] = -1;
        index++;
        this.states[index] = 0;
      }
    }
    await this.swap(arr, index, end);
    return index;
  }

}
