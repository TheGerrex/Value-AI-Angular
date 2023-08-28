import { Component, OnInit, ViewChild } from '@angular/core';
import { PromptLibraryComponent } from '../../components/prompt-library/prompt-library.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  @ViewChild(PromptLibraryComponent) modal!: PromptLibraryComponent;
  sidenavOpen = false;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  ngOnInit() {
    // Close the sidenav on initialization for smaller screens
    if (window.innerWidth <= 768) {
      this.sidenavOpen = false;
    }
  }

  openModal() {
    this.modal.showModal();
  }
}
