import { Component, OnInit } from '@angular/core';
import { OpenCloseFormService } from 'src/app/services/open-close-form.service';

type Slider = {
  value: number;
  checked: boolean;
};

@Component({
  selector: 'lending-diagonal',
  templateUrl: './diagonal.component.html',
  styleUrls: ['./diagonal.component.scss'],
})
export class DiagonalComponent implements OnInit {
  constructor(private formService: OpenCloseFormService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.slide();
    }, 2500);
  }

  slideNumber = 1;

  background: string = `"../../../assets/diagonal-backgrounds/${this.slideNumber}.jpg"`;

  slideLinesArray: number[] = [1, 2, 3];

  slide() {
    if (this.slideNumber === 3) this.slideNumber = 0;
    this.slideNumber++;
    this.background = `"../../../assets/diagonal-backgrounds/${this.slideNumber}.jpg"`;
  }

  openForm() {
    this.formService.isFormOpen.next(true);
  }
}
