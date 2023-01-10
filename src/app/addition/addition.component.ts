import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent  {
  result:number=0
 
addNumbers(elem1:any,elem2:any){
  let n1=+elem1.value
  let n2=+elem2.value
  this.result=n1+n2;

}
}
