import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'input' })
export class RemoveAutocompleteDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'autocomplete',
      'off'
    );
  }
}
