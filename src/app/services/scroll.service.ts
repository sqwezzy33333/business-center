import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  selectedComponentName = new BehaviorSubject<string>('');

  isDiagonalCompInView = new BehaviorSubject<boolean>(true);

  isAboutBlockInView = new BehaviorSubject<boolean>(false);

  wtf = new BehaviorSubject<any>('');

  constructor() {}
}
