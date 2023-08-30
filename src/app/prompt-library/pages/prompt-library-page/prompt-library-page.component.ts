import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-library-page',
  templateUrl: './prompt-library-page.component.html',
  styleUrls: ['./prompt-library-page.component.scss']
})
export class PromptLibraryPageComponent {
  columnMenuOpen = false;
  columnPromptBoxOpen = false;


  toggleMenu() {
    this.columnMenuOpen = !this.columnMenuOpen
  }
  togglePromptBox() {
    this.columnPromptBoxOpen = !this.columnPromptBoxOpen
  }
}
