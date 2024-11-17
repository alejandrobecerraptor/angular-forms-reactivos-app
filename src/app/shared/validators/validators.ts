import { FormControl } from '@angular/forms';

export const cantBeStrider = (control: FormControl): any => {
  const value = control.value.trim().toLowerCase();
  if (value === 'strider') {
    return {
      cantBeStrider: true,
    };
  }

  return null;
};
