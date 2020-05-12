import { Directive, Input } from "@angular/core";
import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[appConfirmEqualValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string;
  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    const constrolToCompare = control.parent.get(this.appConfirmEqualValidator);
    if (constrolToCompare && constrolToCompare.value !== control.value) {
      return { notEqual: true };
    }

    return {notEqual: false};
    //OR
//     return null
  }
}
