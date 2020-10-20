import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public service:DetailsService) { }

  ngOnInit(): void {
  }

}
