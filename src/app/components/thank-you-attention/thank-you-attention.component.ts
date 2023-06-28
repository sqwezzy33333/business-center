import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThankComponentService } from 'src/app/services/thank-component.service';

@Component({
  selector: 'lending-thank-you-attention',
  templateUrl: './thank-you-attention.component.html',
  styleUrls: ['./thank-you-attention.component.scss'],
})
export class ThankYouAttentionComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  value: number = 0;

  constructor(private ThankCompService: ThankComponentService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ThankCompService.isThankCompOpen.next(false);
    }, 3500);

    this.setProgressValue()
  }

  closeComp() {
    this.ThankCompService.isThankCompOpen.next(false);
  }

  setProgressValue() {
    setInterval(() => {
      this.value += 3.2;
    }, 100);
  }
}
