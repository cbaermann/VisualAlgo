import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-bogo',
  templateUrl: './bogo.component.html',
  styleUrls: ['./bogo.component.css']
})
export class BogoComponent implements OnInit {

  values = [];

  w = 300;
  sorted = false;
  finished = false;
  shuffling = 0;
  shuffle = false;
  go = false;

  constructor() { }

  ngOnInit() {
    this.onShuffle();
    const sketch = (s) => {
      s.preload = () => {

      }

      s.setup = () => {
        s.createCanvas(window.innerWidth - 16, window.innerHeight - 120);
        this.values = new Array(s.floor(s.width / this.w));
        for(let i = 0; i < this.values.length; i++) {
          this.values[i] = s.random(s.height - 50);
        }
        this.shuffling = this.values.length - 1;
      }

      s.draw = () => {
        s.background(200);
        if(this.go ==true){

          if(this.sorted == false) {
            this.finished = this.bogoSort();
            if(this.finished == true) {
              this.sorted = true;
            }
          }
        }
        if(this.shuffle == true) {
          this.shuffling = this.shuf(this.shuffling);
          if(this.shuffling == 0) {
            this.finished = false;
            this.shuffling = this.values.length - 1;
            this.sorted = false;
            this.shuffle = false;
          }
        }

        for(let i = 0; i < this.values.length; i++) {
          s.stroke(200);
          if(this.finished == false) {
            s.fill(51);
          }
          else {
            s.fill(0, 128, 0);
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

  bogoSort() {
    let finished = true;
    let a = this.values.length - 1;
    while(a >= 0) {
      let b = Math.floor(Math.random() * a + 1);
      let temp = this.values[b];
      this.values[b] = this.values[a];
      this.values[a] = temp;
      a--;
    }
    for(let i = 0; i < this.values.length; i++) {
      if(this.values[i] > this.values[i + 1]) {
        finished = false;
      }
    }
    return finished;
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
