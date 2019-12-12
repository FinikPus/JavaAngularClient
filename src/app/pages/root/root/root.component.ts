import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
public tempArr = null;
  public fillArr(){

  this.tempArr = [
    {
      key:'key1',
      value:'value1'

    },
    {
      key:'key2',
      value:'value2'

    },
    {
      key:'key3',
      value:'value3'

    },
    {
      key:'key4',
      value:'value4'

    },
    {
      key:'key5',
      value:'value5'

    }
  
  ]
}
  constructor() { }

  ngOnInit() {
  }

}
