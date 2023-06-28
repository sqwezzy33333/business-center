import { Component, OnInit } from '@angular/core';

declare const ymaps: any;

interface MapObject {
  coordinates: number[];
  namePlace: string;
  time: string;
  address: string;
}

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
      iconHoverSrc: './assets/icons/place.svg',
    },
    {
      placeType: 'infrastructure',
      isChecked: false,
      spanText: 'инфраструктура',
      iconSrc: './assets/icons/infrastructure.svg',
      iconHoverSrc: './assets/icons/infrastructure-hover.svg',
    },
  ];

  arrayOfMapObjects: MapObject[] = [
    {
      coordinates: [52.097606, 23.766278],
      namePlace: 'Корона',
      time: '15 минут',
      address: '',
    },
    {
      coordinates: [52.099779, 23.7727],
      namePlace: 'Парк',
      time: '20 минут',
      address: '',
    },
    {
      coordinates: [52.096791, 23.763471],
      namePlace: 'Status',
      time: '5 минут',
      address: '',
    },
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
  }

  getPlacesFromArray(): MapObject[] {
    return this.arrayOfMapObjects.map((el) => {
      return new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: el.coordinates,
        },
        properties: {
          iconCaption: el.namePlace,
        },
      });
    });
  }

  showInfrastucture(): void {
    this.map.geoObjects.removeAll();

    this.addDiagonalCenterToMap('infrastructure');
  
    this.getPlacesFromArray().forEach((el) => {
      this.map.geoObjects.add(el);
    });
  }

  showLocation(): void {
    this.map.geoObjects.removeAll();

    this.addDiagonalCenterToMap('location');
  }

  addDiagonalCenterToMap(type: string): void {
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
