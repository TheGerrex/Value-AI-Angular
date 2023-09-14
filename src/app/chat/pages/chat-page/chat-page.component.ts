import { Component, HostListener, OnInit, ViewChild, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';
import { Message } from '../../classes/message';
import { MessageService } from '../../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../interfaces/interfaces.chat';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ModalService } from '../../services/modal.service';
import { LayoutPageComponent } from '../layout-page/layout-page.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  @ViewChild('messagesContainer', { static: false }) messagesContainer?: ElementRef;
  @Output() toggleFunctionSavePrompt = new EventEmitter<void>();
  showScrollDownButton  = false;
  scrollThreshold = 500;
  chat: Chat | null = null;
  displayModalSavePrompt: boolean = false;
  selectedMessage: Message | null = null;
  chatId: string = '';
  chatMessages: Message[] = [];
  chatData: Chat[] = [];
  userMessage: string = '';

  constructor(
    private chatService: ChatService, 
    private elementRef: ElementRef, 
    private route: ActivatedRoute, 
    private router: Router,
    private sharedService: SharedService,
    private modalService: ModalService,
    public messageService: MessageService,
    private layoutPage: LayoutPageComponent) 
    { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const chatId = +idParam;
        console.log("Chat ID:", chatId);
        this.chatService.getChatById(chatId).subscribe((chat) => {
          console.log("Chat Object:", chat);
          this.chat = chat;
  
          if (this.chat) {
            this.sharedService.updateChatTitle(this.chat.title);
          }
        });
      } else {
        // Handle the case where 'id' is not present in the URL
        this.router.navigate(['/chat']);
        console.error('Invalid chatId or chatId is null');
      }
    });
    this.modalService.modalState$.subscribe((showModal) => {
      this.displayModalSavePrompt = showModal;
    });
    this.chatService.chatMessages$.subscribe((messages) => {
      this.chatMessages = messages;
    });
    this.chatService.getChats().subscribe((data) => {
      this.chatData = data;
    });
  }

  handleSentMessage(message: string) {
    // Create a new Message object and add it to the chatMessages array
    const newMessage = new Message(message, true);
    this.chatMessages.push(newMessage);

    // Optionally, you can call your message service here to persist the message
  }

  showModalSavePrompt(message: Message) {
    this.selectedMessage = message;
    this.modalService.showModal();
  }

  hideModalSavePrompt() {
    this.modalService.hideModal();
  }

  onButtonClickedShowModalSavePrompt() {
    this.toggleFunctionSavePrompt.emit();
  }


  onScroll(event: Event) {
    const container = this.elementRef.nativeElement.querySelector('.messages-container');
    if (container) {
      // Check if scrolled to the top
      // this.showScrollDownButton = container.scrollTop <= this.scrollThreshold;
      this.showScrollDownButton = container.scrollHeight > container.clientHeight;
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
  
  sendMessage(messageText: string, isUserMessage: boolean): void {
    this.route.params.subscribe(params => {
      this.chatId = params['id'];
      if (this.chatId) {
        const chat = this.chatData.find((chat) => chat.id === this.chatId);
        if (chat) {
          // Add your sent message to the chat's messages array
          chat.messages.push({
            text: messageText,
            timestamp: new Date(), // You can set the timestamp as needed
            isUserMessage: true,
          });
      
          // Clear the userMessage input field
          this.userMessage = '';
        }
        // this.messageService.addMessage(text, this.chatId ,isUserMessage);
      } else {
        console.error('Could not add message');
      }
    });
    
  }

  

}
