import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LangLoader } from '@i18n/lang-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const ANGULAR_MODULES = [
  AppRoutingModule,
  CoreModule,
  SharedModule,
  BrowserAnimationsModule,
  BrowserModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...ANGULAR_MODULES,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: LangLoader
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
