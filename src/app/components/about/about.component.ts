import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lending-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  isFormOpen: boolean = false;
  emptyNum!: number;

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl<number>(this.emptyNum, [
      Validators.required,
      Validators.minLength(12),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  openForm(): void {
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.isFormOpen = false;
    }
  }
}
