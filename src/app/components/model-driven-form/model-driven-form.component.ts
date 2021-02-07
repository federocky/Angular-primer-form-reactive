import { Component, OnInit } from '@angular/core';

/

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {


  // languages
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
