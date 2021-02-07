import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component: ModelDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
