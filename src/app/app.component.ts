import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  Input,
} from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { ThankComponentService } from './services/thank-component.service';

interface ComponentNameElement {
  name: string;
  element: HTMLElement;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('content', { read: ElementRef })
  content!: ElementRef;
  contentComponentsArray!: HTMLElement[];
  componentsNameElement!: ComponentNameElement[];
  selectedComponentName!: string;
  selectedElement!: HTMLElement;
  isThankCompOpen!: boolean;

  get diagonalComponentParams() {
    return this.componentsNameElement[0].element.getBoundingClientRect();
  }

  get aboutComponentParams() {
    return this.componentsNameElement[0].element.getBoundingClientRect();
  }

  constructor(
    private scrollService: ScrollService,
    private thankCompService: ThankComponentService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrollService.isDiagonalCompInView.next(this.isDiagonalCompInView());
      this.scrollService.isAboutBlockInView.next(
        this.aboutComponentParams.y * -1 > 650
      );
    });

    this.thankCompService.isThankCompOpen.subscribe(
      (el) => (this.isThankCompOpen = el)
    );
  }

  ngAfterViewInit(): void {
    this.contentComponentsArray = Array.from(
      this.content.nativeElement.children
    );

    this.componentsNameElement = this.contentComponentsArray.map(
      (el: HTMLElement): ComponentNameElement => {
        return { name: el.localName.split('-')[1], element: el };
      }
    );

    this.scrollService.selectedComponentName.subscribe((el) => {
      if (el) {
        this.selectedElement = this.getSelectedElement(el);
        this.selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }

  getSelectedElement(name: string) {
    return this.componentsNameElement.filter((el) => el.name === name)[0]
      .element;
  }

  isDiagonalCompInView(): boolean {
    if (
      this.diagonalComponentParams.y +
        this.diagonalComponentParams.height -
        10 >
      0
    ) {
      return true;
    }
    return false;
  }
}
