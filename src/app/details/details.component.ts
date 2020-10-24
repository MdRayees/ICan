import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DetailsService } from '../shared/details.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myForm: FormGroup;

  constructor(public service:DetailsService) { }

  
  ngOnInit() {
    this.myForm = new FormGroup({
      //PMId:new FormControl(),
      Title:new FormControl(''),
      Description: new FormControl('')
    })
  }

  onSubmit(myForm){
    this.service.postDetails(myForm.value).subscribe(
      res => {},
      err => {
        console.log(err);
      }
    )
  }
   


}
