import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5'

@Component({
  selector: 'app-maxheap',
  templateUrl: './maxheap.component.html',
  styleUrls: ['./maxheap.component.css']
})
export class MaxheapComponent implements OnInit {
  values = [];
  array_length = 0;

  w = 10;
  sorted = false;
  shuffling = -1;
  shuffle = false;
  go = false;

  constructor() { }

  ngOnInit() {
    // this.onShuffle();
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
        this.array_length = this.values.length;
      }

      s.draw = () => {
        s.background(200);
        if(this.go == true) {
          this.heapSort(this.values);
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
          s.stroke(255);
          s.fill(51)
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
    await this.sleep(1)
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

  async heap_root(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < this.array_length && arr[left] > arr[max]) {
        max = left;
    }

    if (right < this.array_length && arr[right] > arr[max])     {
        max = right;
    }

    if (max != i) {
        await this.swap(arr, i, max);
        await this.heap_root(arr, max);
    }
}

  async heapSort(arr) {
    
    for (var i = Math.floor(this.array_length / 2); i >= 0; i -= 1)      {
        await this.heap_root(arr, i);
    }

    for (i = arr.length - 1; i > 0; i--) {
        await this.swap(arr, 0, i);
        this.array_length--;
    
        await this.heap_root(arr, 0);
    }
}

}
