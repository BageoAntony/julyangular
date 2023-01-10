import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent {
  result:number=0
  num1:number=0 
  num2:number=0

  multiplication(){
    this.result=this.result*this.result;
  }


}
