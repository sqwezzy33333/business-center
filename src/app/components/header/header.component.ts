import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
@Component({
  selector: 'lending-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems = [
    {
      text: 'О проекте',
      componentName: 'about',
    },
    {
      text: 'Расположение',
      componentName: 'map',
    },
    {
      text: 'Преимущества',
      componentName: 'advantages',
    },
    {
      text: 'Галлерея',
      componentName: 'slider',
    },
  ];

  constructor(private scrollService: ScrollService) {}

  call(componentName: string) {
   this.scrollService.selectedComponentName.next(componentName)
  }
}
