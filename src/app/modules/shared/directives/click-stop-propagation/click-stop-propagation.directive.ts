import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[clickStopPropagation]'
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.stopPropagation();
  }
}
