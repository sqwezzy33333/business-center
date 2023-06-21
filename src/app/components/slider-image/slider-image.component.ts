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
    });
  }

  getArrayOfImages(): Slider[] {
    let arrayOfImages: Slider[] = this.sliderImages.filter(
      (el: Slider) => el.whatImage === this.whatImagesIsCheked
    );
    return arrayOfImages;
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

  logg() {
    console.log('sdasd');
  }
}
