import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenCloseFormService {
  isFormOpen = new BehaviorSubject<boolean>(false);
  constructor() {}
}
