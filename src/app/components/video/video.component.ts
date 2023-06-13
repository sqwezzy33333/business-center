import { Component } from '@angular/core';

@Component({
  selector: 'lending-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  isPlayerOpen: boolean = false;

  openVideo() {
    this.isPlayerOpen = true;
  }

  closePlayWindow() {
    this.isPlayerOpen = false;
  }
}
