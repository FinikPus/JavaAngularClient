import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
@Component({
  selector: 'app-summa',
  templateUrl: './summa.component.html',
  styleUrls: ['./summa.component.scss']
})
export class SummaComponent implements OnInit {

  public numberOne: string;
  public numberTwo: string;
  


  constructor(private restService: RestService) { }

  ngOnInit() {
  }
  /**
   * При нажатии на кнопку "войти"
   */
  public getSum() {
    console.log('Number One: ' + this.numberOne);
    console.log('Number Two: ' + this.numberTwo);
    const params = {
      numberOne: this.numberOne,
      numberTwo: this.numberTwo
    };
    this.restService.doCall('getSum', params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
