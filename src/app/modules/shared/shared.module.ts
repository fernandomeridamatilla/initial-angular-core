import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@material/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation/click-stop-propagation.directive';
import { MouseEnterRowDirective } from './directives/mouse-enter-row/mouse-enter-row';
import { RemoveAutocompleteDirective } from './directives/remove-autocomplete/remove-autocomplete.directive';
import { NotInformedPipe } from './pipes/not-informed/not-informed.pipe';
import { TruncateStringPipe } from './pipes/truncate-string/truncate-string.pipe';

const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];
const THIRD_PARTY_LIBRARY = [MaterialModule, TranslateModule];
const PUBLIC_PIPES = [TruncateStringPipe, NotInformedPipe];
const PUBLIC_DIRECTIVES = [
  ClickStopPropagationDirective,
  MouseEnterRowDirective,
  RemoveAutocompleteDirective
];
const PUBLIC_COMPONENTS = [LangSelectorComponent];

@NgModule({
  declarations: [...PUBLIC_PIPES, ...PUBLIC_DIRECTIVES, ...PUBLIC_COMPONENTS],
  imports: [...ANGULAR_MODULES, ...THIRD_PARTY_LIBRARY],
  exports: [
    ...ANGULAR_MODULES,
    ...PUBLIC_PIPES,
    ...THIRD_PARTY_LIBRARY,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_COMPONENTS
  ]
})
export class SharedModule {}
