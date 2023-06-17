import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';

interface Statistics {
  value: number;
  measure: string;
  parameter: string;
  valueLenght: number;
}

@Component({
  selector: 'lending-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.isAboutBlockInView
      .pipe(takeWhile(() => !this.canIncreaseFunc))
      .subscribe((el) => {
        if (el === true) {
          this.increaseValues();

          this.canIncreaseFunc = true;
        }
      });
  }

  canIncreaseFunc!: boolean;
  isFormOpen: boolean = false;
  emptyNum!: number;
  time: number = 2000;

  statistics: Statistics[] = [
    {
      value: 6000,
      measure: 'm2',
      parameter: 'Площадь комплекса',
      valueLenght: 4,
    },
    {
      value: 0.75,
      measure: 'Га',
      parameter: 'Площадь земельного участка',
      valueLenght: 4,
    },
    {
      value: 100,
      measure: '',
      parameter: 'Машиномест',
      valueLenght: 3,
    },
    {
      value: 60,
      measure: 'm2',
      parameter: 'Площадь комплекса',
      valueLenght: 2,
    },
  ];

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

  outNum(el: Statistics) {
    let endOfCount: number = el.value;
    let isValueInteger: boolean = Number.isInteger(el.value);

    let step: number = 0;
    if (isValueInteger) {
      step = this.setStepForIntegerValue(el.value);
    } else step = this.setStepForfloatingPointNumber(el.value);
    let n = 0;
    let t = Math.round(this.time / (el.value / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n > endOfCount) {
        n = endOfCount;
        clearInterval(interval);
      }
      el.value = n;
    }, t);
  }

  increaseValues() {
    this.statistics.forEach((el: Statistics) => {
      this.outNum(el);
    });
  }

  setStepForIntegerValue(value: number): number {
    let lenghtOfValue: number = value.toString().length;
    let step: number = 0;
    if (lenghtOfValue === 2) step = 1;
    if (lenghtOfValue === 3) step = 2;
    if (lenghtOfValue === 4) step = 100;

    return step;
  }

  setStepForfloatingPointNumber(value: number): number {
    let number: number = Number(value.toString().split('.')[1]);
    let lenghtOfValue: number = number.toString().length;
    let step: number = 0;
    if (lenghtOfValue === 2) step = 0.01;
    if (lenghtOfValue === 3) step = 0.001;
    if (lenghtOfValue === 4) step = 0.0001;

    return step;
  }
}
