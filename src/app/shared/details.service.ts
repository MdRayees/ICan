import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Fix } from './fix.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  formData:Fix;
  readonly rootURL = 'http://localhost:49534/api';
  constructor(private http : HttpClient) { }

  
 postDetails(formData:Fix){
    return this.http.post(this.rootURL+'/Fix',formData);
  }

  

}
