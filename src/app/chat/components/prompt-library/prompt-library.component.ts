import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-library',
  templateUrl: './prompt-library.component.html',
  styleUrls: ['./prompt-library.component.scss']
})
export class PromptLibraryComponent {
  displayModal: boolean = false;

  showModal() {
    this.displayModal = true;
  }
}
