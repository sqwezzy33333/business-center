import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OpenCloseFormService } from 'src/app/services/open-close-form.service';
import { ThankComponentService } from 'src/app/services/thank-component.service';

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

  constructor(
    private formService: OpenCloseFormService,
    private ThankCompService: ThankComponentService
  ) {}

  ngOnInit(): void {
    this.formService.isFormOpen.subscribe((el: boolean) => {
      this.isFormOpen = el;
    });
  }

  openForm(): void {
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.formService.isFormOpen.next(false);
  }

  closeFormFromOutside(e: Event) {
    let clickedElement = e.target as HTMLElement;
    if (clickedElement.className === 'form-window__close')
      this.isFormOpen = false;
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);

      this.isFormOpen = false;

      setTimeout(() => {
        this.ThankCompService.isThankCompOpen.next(true);
      }, 1000);
    }
  }
}
