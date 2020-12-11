import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dyName: string = "Malik";

//custom method values
  myMethod(){
    return "My Name is " + this.dyName
  }

  myStatus: boolean = false;
  status1 = "Online";
  status2 = "Offline";

}
