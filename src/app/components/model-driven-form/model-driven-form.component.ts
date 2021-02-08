import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Language, User } from './../../models/user.model';



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

  myForm: FormGroup;

 
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language:  FormControl;



  constructor() { 
    this.createForm();
  }

  ngOnInit(): void {

  }
  

  createForm(): void {
    this.myForm = new FormGroup({
      name: new FormGroup({
          firstName: new FormControl('', Validators.required), 
          lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      language: new FormControl('', Validators.required)
  });

  this.setFormControlsVariables();
  }
  


  setFormControlsVariables(): void {

    const fgName: FormGroup = this.myForm.controls.name as FormGroup;

    this.firstName     = fgName.controls.firstName      as FormControl;
    this.lastName      = fgName.controls.lastName       as FormControl;
    this.email         = this.myForm.controls.email     as FormControl;
    this.password      = this.myForm.controls.password  as FormControl;    
    this.language      = this.myForm.controls.language  as FormControl;

  }

  
  onSubmit(): void{

    if (this.myForm.valid){

      console.log(this.myForm.value);

      //creamos un usuario con los valores.
      const user: User = this.myForm.value;

      ///reseteamos el form
      this.myForm.reset()
      return;
    }
    
    //lo marca como touched para mostrar los errores.
    this.myForm.markAllAsTouched();

  }

}
