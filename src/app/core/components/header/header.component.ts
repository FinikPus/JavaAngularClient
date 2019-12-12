import {Component, Input, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userName = 'Войти';

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

}
