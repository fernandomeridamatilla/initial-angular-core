/* eslint-disable @typescript-eslint/member-ordering */
import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[mouseEnterRow]'
})
export class MouseEnterRowDirective {
  constructor(private elRef: ElementRef) {}

  @Output() mouseEnter = new EventEmitter<number>();
  @Output() mouseLeave = new EventEmitter<void>();

  @HostListener('mouseenter')
  mouseenter(): void {
    const postId = (this.elRef.nativeElement as HTMLElement).getAttribute(
      'data-post-id'
    );

    this.mouseEnter.emit(Number(postId));
  }

  @HostListener('mouseleave')
  mouseleave(): void {
    this.mouseLeave.emit();
  }
}
