import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThankComponentService {
  isThankCompOpen = new BehaviorSubject<boolean>(false);
}
