import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStorageService: SessionStorageService) { }
  public setSessionParam(paramName,data){
    if (!data){
      this.sessionStorageService.clear(paramName);
    } else{
      this.sessionStorageService.store(paramName,JSON.stringify(data));
    }
  }
  public getSessionParam(paramName){
    const paramvalue = this.sessionStorageService.retrieve(paramName);
    
  }

}
