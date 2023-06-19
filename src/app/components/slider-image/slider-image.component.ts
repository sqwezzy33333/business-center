import {
  Component,
  ViewEncapsulation,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';

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
  positionNextSlides!: number;

  @ViewChild('container', { read: ElementRef })
  container!: ElementRef;

  @ViewChild('item', { read: ElementRef })
  item!: ElementRef;

  ngAfterViewChecked(): void {
    this.containerWidth = this.container.nativeElement.offsetWidth - 20;
  }

  ngOnInit(): void {
    this.getArrayOfImages();
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
    let a = this.sliderImages.filter(
      (el: Slider) => el.whatImage === this.whatImagesIsCheked
    );
    return a;
  }

  nextSlide() {
    if (this.indexOfSlider === 5) return;
    console.log(this.item);
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
}
