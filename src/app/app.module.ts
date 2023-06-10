import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DiagonalComponent, AboutComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
