import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersService } from './services/users-service/users.service';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersListPageComponent, UsersDetailPageComponent],
  providers: [UsersService],
  imports: [SharedModule, UsersRoutingModule]
})
export class UsersModule {}
