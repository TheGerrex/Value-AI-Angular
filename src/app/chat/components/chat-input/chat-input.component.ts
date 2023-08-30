import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  message: string = ''; // ngModel binding property
  @Output() toggleFunctionChatInput = new EventEmitter<void>();
  @Output() toggleFunctionShareChat = new EventEmitter<void>();

  resizeTextArea(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto'; // Reset height to auto to recalculate
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Set the new height based on scrollHeight
  }

  onButtonClickedChat() {
    this.toggleFunctionChatInput.emit();
  }
  onButtonClickedSharedChat() {
    this.toggleFunctionShareChat.emit();
  }
}
