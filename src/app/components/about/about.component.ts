import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('popupBlock', { read: ElementRef })
  popupBlock!: ElementRef;
  @ViewChild('popup', { read: ElementRef })
  popup!: ElementRef;

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
  emptyNum!: number;
  time: number = 2000;
  isPopupOpen: boolean = false;

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

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup(e: Event) {
    let clickedElement = e.target as HTMLElement;
    if (clickedElement.className === 'popup__close') this.isPopupOpen = false;
  }

  swipeup(e: any) {
    if (
      this.popupBlock.nativeElement.offsetHeight >
      this.popup.nativeElement.offsetHeight
    ) {
      this.popupBlock.nativeElement.style.top = `${e.deltaY}px`;
    }

    let positionTop = parseInt(this.popupBlock.nativeElement.style.top);
    if (positionTop * -1 > this.popupBlock.nativeElement.offsetHeight / 2) {
      this.popupBlock.nativeElement.style.top = `-${
        this.popupBlock.nativeElement.offsetHeight / 3
      }px`;
    }
  }

  swipedown(e: any) {
    if (
      this.popupBlock.nativeElement.offsetHeight >
      this.popup.nativeElement.offsetHeight
    ) {
      this.popupBlock.nativeElement.style.top = `${e.deltaY}px`;
    }
    let positionTop = parseInt(this.popupBlock.nativeElement.style.top);
    if (positionTop > 0) this.popupBlock.nativeElement.style.top = '0';
  }
}
