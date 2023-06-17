import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  selectedComponentName = new BehaviorSubject<string>('');

  isDiagonalCompInView = new BehaviorSubject<boolean>(true);

  isAboutBlockInView = new BehaviorSubject<boolean>(false)

  constructor() {}
}
