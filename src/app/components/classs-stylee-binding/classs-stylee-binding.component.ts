import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classs-stylee-binding',
  templateUrl: './classs-stylee-binding.component.html',
  styleUrls: ['./classs-stylee-binding.component.scss']
})
export class ClasssStyleeBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myPro:boolean = true;

  myStyle1: string = "15px";

  isActive:boolean = true;

  mltClasses = {
    class1:true,
    class2: true,
    class3:true
  }

mltStyle ={
  'background': 'gray',
  'border': '5px solid black'
}
}
