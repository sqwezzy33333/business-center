import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaxValueLengthPipe } from './pipes/max-value-length.pipe';

import { MapListComponent } from './components/map/map-list/map-list.component';
import { VideoComponent } from './components/video/video.component';
import { MapComponent } from './components/map/map.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormWindowComponent } from './components/form-window/form-window.component';
import { ThankYouAttentionComponent } from './components/thank-you-attention/thank-you-attention.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';
import { AboutComponent } from './components/about/about.component';
import { HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiagonalComponent,
    AboutComponent,
    MaxValueLengthPipe,
    VideoComponent,
    MapComponent,
    AdvantagesComponent,
    PartnershipComponent,
    SliderImageComponent,
    FooterComponent,
    FormWindowComponent,
    ThankYouAttentionComponent,
    MapListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    HammerModule,
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
