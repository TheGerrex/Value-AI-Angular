import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../../classes/message';
import { MessageService } from '../../services/message.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit{
  @Output() toggleFunctionChatInput = new EventEmitter<void>();
  @Output() toggleFunctionShareChat = new EventEmitter<void>();
  @Output() shareChatData: EventEmitter<any> = new EventEmitter<any>();
  messages: Message[] = [];
  userMessage: string = '';


  constructor(
    private messageService: MessageService, 
    private sharedService: SharedService, 
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService) {}


  ngOnInit() {
    // Get the chatId from the query parameters
    this.activatedRoute.firstChild?.params.subscribe((params) => {
      const idParam = params['id'];
      
  
      // Check if chatId is not null
      if (idParam !== null) {
        const chatId = +idParam;
        console.log('Chat id:', chatId);
        // Fetch chat data based on chatId
        this.chatService.getChatById(chatId).subscribe((chatData) => {
          // Share the chat data with the shared service
          // this.sharedService.shareChat(chatData);
          this.shareChatData.emit(chatData);
          this.sharedService.shareChat(chatData);
          // this.sharedService.chatData = chatData;
          console.log('Chat Data:',chatData);
        });
      }
    });
  }

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
    console.log('toggle function emited')
  }
}
