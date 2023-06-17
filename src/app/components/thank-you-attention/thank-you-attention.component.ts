import { Component, OnInit } from '@angular/core';
import { ThankComponentService } from 'src/app/services/thank-component.service';

@Component({
  selector: 'lending-thank-you-attention',
  templateUrl: './thank-you-attention.component.html',
  styleUrls: ['./thank-you-attention.component.scss'],
})
export class ThankYouAttentionComponent implements OnInit {
  constructor(private ThankCompService: ThankComponentService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ThankCompService.isThankCompOpen.next(false)
    }, 2500);
  }

  closeComp() {
    this.ThankCompService.isThankCompOpen.next(false);
  }
}
