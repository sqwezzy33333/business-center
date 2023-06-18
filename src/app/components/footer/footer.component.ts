import { Component } from '@angular/core';
import { OpenCloseFormService } from 'src/app/services/open-close-form.service';

@Component({
  selector: 'lending-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isCopy = false;

  constructor(private formService: OpenCloseFormService) {}

  openForm() {
    this.formService.isFormOpen.next(true);
  }

  copyNumber() {
    let phone = '+375292992929';
    navigator.clipboard.writeText(phone);
  }

  showAttentionAboutCopy() {
    setTimeout(() => {
      this.isCopy = true;
      setTimeout(() => {
        this.isCopy = false;
      }, 1200);
    }, 800);
  }
}
