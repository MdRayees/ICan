import { Injectable } from '@angular/core';
import { Fix } from './fix.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ICanService {
  formData:Fix
  readonly rootURL = 'http://localhost:49534/api';
  constructor(private http : HttpClient) { }

  // postICan(formData:Fix){
  //   return this.http.post(this.rootURL+'/Fix',formData);
  // }

}
