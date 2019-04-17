import { Component, OnInit, Input } from '@angular/core';
import {FarresProjectModel} from  './../shared/farres-project-model';

@Component({
  selector: 'app-farres-projectdetails',
  templateUrl: './farres-projectdetails.component.html',
  styleUrls: ['./farres-projectdetails.component.css']
})
export class FarresProjectdetailsComponent implements OnInit {

  
  @Input() todo : FarresProjectModel;

  constructor() { }

  ngOnInit() {
  }

}
