import {
  Component,
  ViewEncapsulation,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

interface Slider {
  whatImage: string;
  src: string[];
}

@Component({
  selector: 'lending-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class SliderImageComponent implements OnInit, AfterViewChecked {
  @ViewChild('container', { read: ElementRef })
  container!: ElementRef;
  @ViewChild('radio_btns', { read: ElementRef }) radioBtns!: ElementRef;
  @ViewChild('item', { read: ElementRef })
  item!: ElementRef;
  @ViewChild('slider', { read: ElementRef }) sliderElement!: HTMLElement;

  rangeFields = [
    {
      whatImage: 'facade',
      isChecked: true,
      spanText: 'фасад',
      iconSrc: './assets/icons/infrastructure.svg',
      iconHoverSrc: './assets/icons/infrastructure-hover.svg',
    },
    {
      whatImage: 'inter',
      isChecked: false,
      spanText: 'Интерьер общих зон',
      iconSrc: './assets/icons/place.svg',
      iconHoverSrc: './assets/icons/place.svg',
    },
    {
      whatImage: 'parking',
      isChecked: false,
      spanText: 'паркинг',
      iconSrc: './assets/icons/infrastructure.svg',

      iconHoverSrc: './assets/icons/infrastructure-hover.svg',
    },
  ];

  sliderImages: Slider[] = [
    {
      whatImage: 'facade',
      src: [
        './assets/diagonal-backgrounds/1.jpg',
        './assets/diagonal-backgrounds/2.jpg',
        './assets/diagonal-backgrounds/3.jpg',
        './assets/diagonal-backgrounds/1.jpg',
        './assets/diagonal-backgrounds/2.jpg',
      ],
    },
    {
      whatImage: 'inter',
      src: [
        './assets/diagonal-backgrounds/2.jpg',
        './assets/diagonal-backgrounds/1.jpg',
        './assets/diagonal-backgrounds/2.jpg',
        './assets/diagonal-backgrounds/3.jpg',
        './assets/diagonal-backgrounds/1.jpg',
      ],
    },
    {
      whatImage: 'parking',
      src: [
        './assets/diagonal-backgrounds/3.jpg',
        './assets/diagonal-backgrounds/2.jpg',
        './assets/diagonal-backgrounds/1.jpg',
        './assets/diagonal-backgrounds/3.jpg',
        './assets/diagonal-backgrounds/2.jpg',
      ],
    },
  ];

  currentSliders!: Slider;
  whatImagesIsCheked: string = this.rangeFields[0].whatImage;
  containerWidth!: number;
  indexOfSlider: number = 1;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.getArrayOfImages();
  }

  ngAfterViewChecked(): void {
    this.containerWidth = this.container.nativeElement.offsetWidth - 20;
  }

  checkType(type: string) {
    this.rangeFields.forEach((el) => {
      el.isChecked = false;
      if (el.whatImage === type) {
        el.isChecked = true;
        this.whatImagesIsCheked = el.whatImage;
        this.indexOfSlider = 1;
        this.item.nativeElement.style.left = '0';
      }
      this.getArrayOfImages();
    });
  }

  getArrayOfImages() {
    let arrayOfImages: Slider[] = this.sliderImages.filter(
      (el: Slider) => el.whatImage === this.whatImagesIsCheked
    );
    this.currentSliders = arrayOfImages[0];
  }

  nextSlide() {
    if (this.indexOfSlider === 5) return;
    this.item.nativeElement.style.left = `-${
      this.containerWidth * this.indexOfSlider
    }px`;
    this.indexOfSlider++;
  }

  prevSlide() {
    if (this.indexOfSlider === 1) return;
    this.item.nativeElement.style.left = `-${
      this.containerWidth * this.indexOfSlider - this.containerWidth * 2
    }px`;
    this.indexOfSlider--;
  }

  goUp() {
    this.scrollService.selectedComponentName.next('diagonal');
  }

  leftSwipeRangeBtns(e: any) {
    if (this.containerWidth < 456) {
      this.radioBtns.nativeElement.style.left = `${e.deltaX}px`;
    }
  }

  rightSwipeRangeBtns(e: any) {
    if (this.containerWidth < 456) {
      if (!this.radioBtns.nativeElement.style.left) return;

      let leftPx = e.deltaX / 1.5;
      if (leftPx > 0) {
        this.radioBtns.nativeElement.style.left = `${0}px`;
        return;
      }
      this.radioBtns.nativeElement.style.left = `${e.deltaX}px`;
    }
  }
}
