import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaxValueLengthPipe } from './pipes/max-value-length.pipe';
import { VideoComponent } from './components/video/video.component';
import { MapComponent } from './components/map/map.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormWindowComponent } from './components/form-window/form-window.component';
import { ThankYouAttentionComponent } from './components/thank-you-attention/thank-you-attention.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
