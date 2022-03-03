import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AuthGuard } from './guards/auth/auth.guard';
import { ApiUrlInterceptor } from './interceptors/api-url/api-url.interceptor';
import { AuthService } from './services/auth/auth.service';

const SERVICES = [AuthService];
const GUARDS = [AuthGuard];

@NgModule({
  providers: [
    ...SERVICES,
    ...GUARDS,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true }
  ],
  imports: [HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
