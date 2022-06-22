import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.css']
})
export class FormItemsComponent  {
  log(x: any){
    console.log(x);
  }

}
