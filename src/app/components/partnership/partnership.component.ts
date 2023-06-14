import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'lending-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartnershipComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(12),
      Validators.pattern(/^-?(0|[1-9,+]\d*)?$/),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
