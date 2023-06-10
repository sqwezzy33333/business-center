import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiagonalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
