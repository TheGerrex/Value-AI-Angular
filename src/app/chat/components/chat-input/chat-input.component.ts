import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../../classes/message';
import { MessageService } from '../../services/message.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  @Output() toggleFunctionChatInput = new EventEmitter<void>();
  @Output() toggleFunctionShareChat = new EventEmitter<void>();
  messages: Message[] = [];
  userMessage: string = '';


  constructor(private messageService: MessageService, private sharedService: SharedService) {}

  sendMessage(): void {
    if (this.userMessage.trim() !== '') {
      this.messageService.addMessage(this.userMessage, true); // User message
      // Send this.userMessage to your AI backend and receive a response
      // Add the AI's response to the chat using messageService
      this.userMessage = ''; // Clear the input field
    }
  }

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
    const chatData = {
      // Populate chatData with the relevant chat information
    };
  
    console.log('Chat Data to be shared:', chatData); // Log chat data for debugging
  
    // Share the chat data with the shared service
    this.sharedService.shareChat(chatData);
  }
}
