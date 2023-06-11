import { Component, OnInit } from '@angular/core';

type Slider = {
  value: number;
  checked: boolean;
};

@Component({
  selector: 'lending-diagonal',
  templateUrl: './diagonal.component.html',
  styleUrls: ['./diagonal.component.scss'],
})
export class DiagonalComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.slide();
    }, 2000);
  }

  slideNumber = 1;

  background: string = `"../../../assets/backgrounds/diagonal${this.slideNumber}.jpg"`;

  slides = [
    {
      src: '',
      id: 1,
    },
    {
      src: '',
      id: 2,
    },
    {
      src: '',
      id: 3,
    },
  ];

  slideLinesArray: number[] = [1, 2, 3];

  slide() {
    if (this.slideNumber === 3) this.slideNumber = 0;
    this.slideNumber++;
    this.background = `"../../../assets/backgrounds/diagonal${this.slideNumber}.jpg"`;
  }
}
