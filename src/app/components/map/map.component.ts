import { Component, OnInit } from '@angular/core';

declare const ymaps: any;

@Component({
  selector: 'lending-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
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

  arrayOfMapObjects = [
    [[52.09882, 23.76674], 'Администрация'],
    [[52.097606, 23.766278], 'Корона'],
    [[52.099779, 23.7727], 'Парк'],
    [[52.096791, 23.763471], 'Status'],
  ];
  map: any;

  ngOnInit(): void {
    ymaps.ready().done(() => this.createMap());
  }

  private createMap(): void {
    this.map = new ymaps.Map('map', {
      center: [52.099045, 23.768008],
      zoom: 15,
    });

    const DiagonalMark = new ymaps.Placemark(
      [52.099045, 23.768008],
      {
        iconCaption: 'Diagonal',
      },
      {
        preset: 'islands#blueHomeIcon',
      }
    );

    this.map.geoObjects.add(DiagonalMark);
  }

  checkType(type: string) {
    this.rangeFields.forEach((el) => {
      el.isChecked = false;
      if (el.placeType === type) el.isChecked = true;
    });

    if (type === 'infrastructure') this.showInfrastucture();
    if (type === 'location') this.showLocation();
    console.log(type);
  }

  getPlacesFromArray() {
    return this.arrayOfMapObjects.map((el) => {
      return new ymaps.GeoObject(
        {
          geometry: {
            type: 'Point',
            coordinates: el[0],
          },
          properties: {
            iconCaption: el[1],
          },
        }
      );
    });
  }

  showInfrastucture() {
    this.map.geoObjects.removeAll();

    this.addDiagonalCenterToMap('infrastructure');
    console.group(this.getPlacesFromArray());
    this.getPlacesFromArray().forEach((el) => {
      this.map.geoObjects.add(el);
    });
  }

  showLocation() {
    this.map.geoObjects.removeAll();

    this.addDiagonalCenterToMap('location');
  }

  addDiagonalCenterToMap(type: string) {
    let title: string;
    let color: string;

    if (type === 'infrastructure') {
      title = '';

      color = 'islands#redHomeIcon';
    } else if (true) {
      title = 'Diagonal';
      color = 'islands#blueHomeIcon';
    }

    const DiagonalMark = new ymaps.Placemark(
      [52.099045, 23.768008],
      { iconCaption: title },
      {
        preset: color,
      }
    );

    this.map.geoObjects.add(DiagonalMark);
  }
}
