import { Component, ViewChild } from '@angular/core';
import { PromptLibraryComponent } from '../../components/prompt-library/prompt-library.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  @ViewChild(PromptLibraryComponent) modal!: PromptLibraryComponent;

  openModal() {
    this.modal.showModal();
  }
}
