import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private loggedIn: boolean = false;
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  
  constructor() { }

  getSearchCompData(data: any) {
    this.dataSubject.next(data);
  }

  getLoginStatus(){
    return this.loggedIn;
  }

  setLoginStatus(value: boolean){
    this.loggedIn = value
  }
}
