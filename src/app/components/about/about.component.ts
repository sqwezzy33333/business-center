import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lending-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.min(3)]),
    phone: new FormControl<number>(+375, [
      Validators.required,
      Validators.min(13),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });
}
