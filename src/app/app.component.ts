import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { ScrollService } from './services/scroll.service';

interface ComponentNameElement {
  name: string;
  element: HTMLElement;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'business-center';
  @ViewChild('content', { read: ElementRef })
  content!: ElementRef;
  contentComponentsArray!: HTMLElement[];
  componentsNameElement!: ComponentNameElement[];
  selectedComponentName!: string;
  selectedElement!: HTMLElement;

  constructor(private scrollService: ScrollService) {}

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
        console.log(this.selectedElement);
        this.selectedElement.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    });
  }

  getSelectedElement(name: string) {
    return this.componentsNameElement.filter((el) => el.name === name)[0]
      .element;
  }
}
