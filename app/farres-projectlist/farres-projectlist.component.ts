import { Component, OnInit } from '@angular/core';
import { FarresProjectModel } from './../shared/farres-project-model';
import { ProjectItems } from './../shared/project-items';


@Component({
  selector: 'app-farres-projectlist',
  templateUrl: './farres-projectlist.component.html',
  styleUrls: ['./farres-projectlist.component.css']
})
export class FarresProjectlistComponent implements OnInit {
  todos = ProjectItems;
  
  selectedTodo: FarresProjectModel;
  

  constructor() { }

  ngOnInit() {
  }

  onSelect(farresprojectModel: FarresProjectModel) {
    this.selectedTodo = farresprojectModel;
  }

}
