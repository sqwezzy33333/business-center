import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThankComponentService } from 'src/app/services/thank-component.service';

@Component({
  selector: 'lending-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PartnershipComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl<string>('+375', [
      Validators.required,
      Validators.minLength(13),
      Validators.pattern(/^-?(0|[1-9,+]\d*)?$/),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  constructor(private thankCCompService: ThankComponentService) {}

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      setTimeout(() => {

      this.thankCCompService.isThankCompOpen.next(true);
      }, 1000);
    }
  }
}
