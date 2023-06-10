import { Component } from '@angular/core';

type Slider = {
  value: number;
  checked: boolean;
};

@Component({
  selector: 'lending-diagonal',
  templateUrl: './diagonal.component.html',
  styleUrls: ['./diagonal.component.scss'],
})
export class DiagonalComponent {
  sliderArray: Slider[] = [
    { value: 1, checked: true },
    { value: 2, checked: false },
    { value: 3, checked: false },
  ];

  checkSlider(item: Slider) {
    this.sliderArray.forEach((el: Slider) => {
      if (el.value === item.value) {
        el.checked = true;
      } else el.checked = false;
    });
  }
}
