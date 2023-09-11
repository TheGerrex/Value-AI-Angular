import { Component, HostListener, OnInit, ViewChild, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
  @ViewChild('messagesContainer', { static: false }) messagesContainer?: ElementRef;
  @Output() toggleFunctionSavePrompt = new EventEmitter<void>();
  showScrollDownButton  = false;
  scrollThreshold = 300;

  constructor(private elementRef: ElementRef) {}

  onButtonClickedShowModalSavePrompt() {
    this.toggleFunctionSavePrompt.emit();
  }


  onScroll(event: Event) {
    const container = this.elementRef.nativeElement.querySelector('.messages-container');
    if (container) {
      // Check if scrolled to the top
      this.showScrollDownButton = container.scrollTop <= this.scrollThreshold;
    }
  }

  scrollBottomChat() {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;

      // Enable smooth scrolling
      container.classList.add('smooth-scroll');

      // Scroll to the bottom
      container.scrollTop = container.scrollHeight;

      // Disable smooth scrolling after a delay
      setTimeout(() => {
        container.classList.remove('smooth-scroll');
      }, 300); // Adjust the delay as needed
    }
  }
  

}
