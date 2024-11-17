import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        cantBeStrider: true,
      };
    }

    return null;
  };

  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo(
    fieldOne: string,
    fieldTwo: string
  ): ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const valueOne = formGroup.get(fieldOne)?.value;
      const valueTwo = formGroup.get(fieldTwo)?.value;

      if (valueOne !== valueTwo) {
        formGroup.get(fieldTwo)?.setErrors({ noEqual: true });
        return {
          noEqual: true,
        };
      }
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }
}
