import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  message:string;
  constructor() { }
  setaccount(value:any)
  {
    this.message=value;
  }
  getaccount()
  {
    return this.message;
  }
}
