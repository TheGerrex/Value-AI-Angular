import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../../classes/message';
import { MessageService } from '../../services/message.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit{
  @Output() toggleFunctionChatInput = new EventEmitter<void>();
  @Output() toggleFunctionShareChat = new EventEmitter<void>();
  @Output() shareChatData: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendMessageEvent = new EventEmitter<string>();
  messages: Message[] = [];
  userMessage: string = '';
  

  constructor(
    private messageService: MessageService, 
    private sharedService: SharedService, 
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private router: Router,) {}


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

  // sendMessage(text: string) {
  //   const chatId = this.activatedRoute.firstChild?.snapshot.paramMap.get('id');
  //   console.log(chatId);
  //   if (chatId !== null && chatId !== undefined) {
  //     this.messageService.addMessage(chatId, text, true);
  //     this.userMessage = '';
  //     console.log('entered message add')
  //     this.router.navigate(['/chat', chatId]);
  //   }
  // }

  sendMessage() {
    console.log('send message function');
    if (this.userMessage.trim() !== '') { // Check if the message is not empty
      this.sendMessageEvent.emit(this.userMessage); // Emit the message
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
