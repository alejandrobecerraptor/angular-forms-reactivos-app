import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    wantNotifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
    // this.myForm.reset();
  }
}
