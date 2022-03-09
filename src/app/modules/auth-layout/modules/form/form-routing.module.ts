import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPageComponent } from './page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
