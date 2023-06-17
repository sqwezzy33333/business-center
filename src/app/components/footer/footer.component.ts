import { Component } from '@angular/core';
import { OpenCloseFormService } from 'src/app/services/open-close-form.service';

@Component({
  selector: 'lending-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private formService: OpenCloseFormService) {}

  openForm() {
    this.formService.isFormOpen.next(true);
  }
}
