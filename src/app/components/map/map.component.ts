import { Component } from '@angular/core';

@Component({
  selector: 'lending-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  rangeFields = [
    {
      placeType: 'location',
      isChecked: true,
      spanText: 'расположение',
      iconSrc: './assets/icons/place.svg',
    },
    {
      placeType: 'infrastructure',
      isChecked: false,
      spanText: 'инфраструктура',
      iconSrc: './assets/icons/infrastructure.svg',
    },
  ];

  checkType(type: string) {
    this.rangeFields.forEach((el) => {
      el.isChecked = false;
      if (el.placeType === type) el.isChecked = true;
    });
    console.log(this.rangeFields);
  }
}
