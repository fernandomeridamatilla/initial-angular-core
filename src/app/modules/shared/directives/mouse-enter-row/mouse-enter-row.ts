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
    const el = this.elRef.nativeElement as HTMLElement;
    const postId = el.getAttribute('data-post-id');

    el.classList.add('on-mouse-enter');
    this.mouseEnter.emit(Number(postId));
  }

  @HostListener('mouseleave')
  mouseleave(): void {
    const el = this.elRef.nativeElement as HTMLElement;

    el.classList.remove('on-mouse-enter');
    this.mouseLeave.emit();
  }
}
