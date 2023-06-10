import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { KeyPatternControllerDirective } from './key-pattern-controller.directive';

@Directive({
  selector: 'input[numbersOnly]',
})
export class NumbersOnlyDirective extends KeyPatternControllerDirective {
  // protected override pattern = /[0-9]*/g;
  protected override pattern = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/

  constructor(
    protected override element: ElementRef,
    protected override control: NgControl
  ) {
    super(element, control);
  }
}
