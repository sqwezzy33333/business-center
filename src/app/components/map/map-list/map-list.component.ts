import { Component, Input } from '@angular/core';

@Component({
  selector: 'map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
})
export class MapListComponent {
  @Input() items: any;
}
