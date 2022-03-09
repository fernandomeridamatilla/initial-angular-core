import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { FormRoutingModule } from './form-routing.module';
import { FormPageComponent } from './page/form-page.component';

@NgModule({
  declarations: [FormPageComponent],
  imports: [SharedModule, FormRoutingModule]
})
export class FormModule {}
