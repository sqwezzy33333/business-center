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
    this.makeSlider();
  }

  currentIndex!: number;

  sliderArray: Slider[] = [
    { value: 1, checked: true },
    { value: 2, checked: false },
    { value: 3, checked: false },
  ];

  makeSlider() {
    let a = 1;
    setTimeout(() => {
      this.sliderArray[a].checked = true;
      a++;
    }, 2000);
  }
}
