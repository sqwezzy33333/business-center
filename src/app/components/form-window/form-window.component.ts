import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpenCloseFormService } from 'src/app/services/open-close-form.service';

@Component({
  selector: 'lending-form-window',
  templateUrl: './form-window.component.html',
  styleUrls: ['./form-window.component.scss'],
})
export class FormWindowComponent implements OnInit {
  isFormOpen!: boolean;

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl<string>('+375', [
      Validators.required,
      Validators.minLength(12),
      Validators.pattern(/^-?(0|[1-9,+]\d*)?$/),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });

  constructor(private formService: OpenCloseFormService) {}

  ngOnInit(): void {
    this.formService.isFormOpen.subscribe((el) => {
      this.isFormOpen = el;
    });
  }

  openForm(): void {
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.formService.isFormOpen.next(false);
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.isFormOpen = false;
    }
  }
}
