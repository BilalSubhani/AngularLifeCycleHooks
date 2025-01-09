import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges{

  @Input() message: string = '';

  ngOnChanges(){
    console.log("Input changed");
  }
}