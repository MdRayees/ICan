import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  detailsForm = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl(''),
    description: new FormControl('')
  });
}
