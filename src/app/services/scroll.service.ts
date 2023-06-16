import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  selectedComponentName = new BehaviorSubject<string>('');

  constructor() {}
}
