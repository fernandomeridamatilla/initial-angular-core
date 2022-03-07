import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [SharedModule, PostsRoutingModule]
})
export class PostsModule {}
