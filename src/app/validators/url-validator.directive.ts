import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { stringify } from 'querystring';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validator {
  
  @Input() appEqualValidator: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    
    const controlToCompare = control.parent.get(this.appEqualValidator)
    if (controlToCompare && controlToCompare.value == control.value)
    return {"notEqual": true};
  }
}
