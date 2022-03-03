import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundPageComponent } from './page/not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [SharedModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
