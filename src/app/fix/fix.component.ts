import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  ICanService } from '../shared/ICan.service';
//import {FormArray}

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {

  panelOpenState = false;

  constructor(public service:ICanService) { }
  

  ngOnInit(): void {
  }

 

}
