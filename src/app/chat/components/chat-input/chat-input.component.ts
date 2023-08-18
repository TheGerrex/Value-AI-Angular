import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  message: string = ''; // ngModel binding property

  resizeTextArea(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto'; // Reset height to auto to recalculate
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Set the new height based on scrollHeight
  }
}
