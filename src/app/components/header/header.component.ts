import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
@Component({
  selector: 'lending-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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

  underPhoneText: string = 'Копировать телефон';

  phoneNumber: string = '+375 (29) 000 00 00';

  isHeaderWhite = false;

  isCopy = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.isDiagonalCompInView.subscribe((el) => {
      this.isHeaderWhite = !el;
    });
  }

  setSellectedComp(componentName: string) {
    this.scrollService.selectedComponentName.next(componentName);
  }

  copyNumber() {
    let phone = '+375 (29) 000 00 00';
    navigator.clipboard.writeText(phone);
  }

  showAttentionAboutCopy() {
    setTimeout(() => {
      this.isCopy = true;
      setTimeout(() => {
        this.isCopy = false;
      }, 1200);
    }, 800);
  }
}
