import { Component, OnInit } from '@angular/core';
import { Language } from './../../models/user.model';



@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {


  // languages
  langs: Language[] = [
    {
      id: 1,
      name: 'English'
    },
    {
      id: 2,
      name: 'French'
    },
    {
      id: 3,
      name: 'German'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
