import { Component, OnInit } from '@angular/core';
import 'p5';

var p5: any;

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {


  constructor() {
  }
  private p5;





  ngOnInit() {
    this.createCanvas()
  }

  private createCanvas(){
    this.p5 = new p5(this.sketch)
  }
  private sketch(p: any){
    p.setup=()=>{
      p.createCanvas(700,600);
    }
    p.draw=()=>{
      p.background(255);
      p.fill(0);
      p.rect(p.width / 2, p.height / 2, 50 ,50)
    }
  }
}
