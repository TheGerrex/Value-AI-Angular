import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chat } from '../../interfaces/interfaces.chat';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { ChatService } from '../../services/chat.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ModalService } from '../../services/modal.service';
import { Message } from '../../classes/message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  columnChatsOpen = true;
  columnChatsOpenMobile = false;
  columnPluginsOpen = true;
  columnPluginsOpenTablet = false;
  columnPluginsOpenMobile = false;
  columnSettingsOpenMobile = false;
  checked = true;
  displayModalFilesUpload: boolean = false;
  chatInputSettingsVisible: boolean = false;
  displayModalSavePrompt: boolean = false;
  displayModalShareChat: boolean = false;
  isEditing = false;
  chatActive = false;
  originalTitleCopy: string = '';
  selectedChat: Chat | null = null;
  chats: Chat[] = [];
  clientChats: Chat[] | undefined;
  nonClientChats: Chat[] | undefined; 
  chatData: any;
  chatTitle: string | undefined;
  chatMessages: Message[] = [];
  userMessage: string = '';
  chatId: string | null = null;

  
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private chatService: ChatService, 
    private messageService: MessageService,
    private sharedService: SharedService,
    private modalService: ModalService,) { } 
  
  ngOnInit(): void {
    if (  window.innerWidth >= 768) {
      this.columnSettingsOpenMobile = false;
    };
    this.chatService.getChats().subscribe(
      (response) => {
        if ('chats' in response) {
          const chatData: any = response['chats'];
          console.log(chatData);
    
          this.clientChats = chatData.filter((chat: Chat) => chat.chatClient);
          console.log(this.clientChats);
    
          this.nonClientChats = chatData.filter((chat: Chat) => !chat.chatClient);
          console.log(this.nonClientChats);
        } else {
          console.error('Invalid response format: "chats" property not found.');
        }
      },
      (error) => {
        console.error('Error fetching chats:', error);
      }
    );
    this.sharedService.chatTitleChanged.subscribe((title) => {
      this.chatTitle = title;
    });
    console.log('Chat data in shared service Layout Page:', this.sharedService.chatData$);
    this.sharedService.chatData$.subscribe((chatData) => {
      if (chatData) {
        this.chatData = chatData;
        console.log('Chat data in Layout Page:', this.chatData);
        // Now, this.chatData contains the JSON data emitted by the observable.
      }
    });
    this.chatService.chatMessages$.subscribe((messages) => {
      this.chatMessages = messages;
    });
    this.route.firstChild?.params.subscribe((params) => {
      const idParam = params['id'];
      if (idParam !== null) {
        this.chatId = idParam;
        // Now you can use this.chatId to fetch and display messages.
        // For example:
        // this.messages = this.messageService.getMessages(this.chatId);
      }
    });
  }

  handleSentMessage(messageText: string) {
    console.log("handleSentMessage",messageText);
    const newMessage = new Message(messageText, true);
    this.chatMessages.push(newMessage);
    console.log("Chat Messages:",this.chatMessages);
  }

  // sendMessage() {
  //   if (this.userMessage.trim() !== '') {
  //     // Create a new Message object
  //     const newMessage = new Message(this.userMessage, true);

  //     // Get the current chat messages
  //     const currentMessages = [...this.chatMessages];

  //     // Add the new message
  //     currentMessages.push(newMessage);

  //     // Update the chat messages in the chat service
  //     this.chatService.updateChatMessages(currentMessages);

  //     // Clear the input field
  //     this.userMessage = '';
  //   }
  // }

  onSendMessage(message: string) {
    const chatId = this.getCurrentChatId(); // Implement a method to get the current chat ID
    this.messageService.addMessage(chatId, message, true);
  }

  getCurrentChatId(): string {
    if (this.chatId !== null) {
      return this.chatId
    } else {
      return "";
    }
  }

  navigateToChat(chatId: number) {
    this.router.navigate(['/chat', chatId]);
  }
  
  closeChatListMobile() {
    this.columnChatsOpenMobile = false;
  }

  toggleChat( ) {
    this.chatActive = !this.chatActive;
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  startEditing(chat: Chat) {
    // Set isEditing to true to show the editing template
    chat.isEditing = true;
    // Create a copy of the original title
    this.originalTitleCopy = chat.title;
    console.log("startEditing",chat.title);
    console.log("startEditing Title Copy",this.originalTitleCopy);
  }

  cancelEdit(chat: Chat) {
    // Cancel editing and restore the original title
    chat.title = this.originalTitleCopy;
    chat.isEditing = false;
    console.log("cancelEdit",chat.title);
    console.log("cancelEdit Title Copy",this.originalTitleCopy);
    // Reset the copy
    chat.title = this.originalTitleCopy;
    this.originalTitleCopy = '';
    console.log("cancelEdit 2",chat.title);
    console.log("cancelEdit Title Copy 2",this.originalTitleCopy);
  }

  saveChanges(chat: Chat) {
    // Save the changes and exit editing mode
    chat.isEditing = false;
    console.log("saveChanges",chat.title);
    console.log("saveChanges Title Copy",this.originalTitleCopy);
    // Reset the copy
    this.originalTitleCopy = '';
  }

  toggleChatInputSettings() {
    this.chatInputSettingsVisible = !this.chatInputSettingsVisible;
    if (  window.innerWidth >= 768 ) {
      this.chatInputSettingsVisible = !this.chatInputSettingsVisible;
    }
  }
  
  toggleChatShareModal() {
    this.showModalShareChat();
    console.log("showModalShareChat");
  }

  toggleFilesUploadModal() {
    this.showModalFilesUpload();
  }

  showModalSavePrompt() {
    this.displayModalSavePrompt = true;
  }

  hideModalSavePrompt() {
    this.displayModalSavePrompt = false;
  }

  showModalShareChat() {
    this.displayModalShareChat = true;
  }

  hideModalShareChat() {
    this.displayModalShareChat = false;
  }

  showModalFilesUpload() {
    this.displayModalFilesUpload = true;
  }

  hideModalFilesUpload() {
    this.displayModalFilesUpload = false;
  }

  toggleLayoutFunctionPlugins() {
    console.log("button plugins emits");
    this.ontogglePlugins();
  }
  
  toggleLayoutFunctionChats() {
    console.log("button chats emits");
    this.ontoggleChats();
  }
  
  ontoggleChats() {
    this.columnChatsOpen = !this.columnChatsOpen;
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnPluginsOpenTablet = false;
    }
    if (  window.innerWidth <= 768 ) {
      this.columnChatsOpenMobile = !this.columnChatsOpenMobile;
    }
    
  }
  ontogglePlugins() {
    this.columnPluginsOpen = !this.columnPluginsOpen;
    
    if (  window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.columnChatsOpen = false;
      this.columnPluginsOpenTablet = !this.columnPluginsOpenTablet;
    }
    if (  window.innerWidth <= 768 ) {
      this.columnPluginsOpenMobile = !this.columnPluginsOpenMobile;
    }
    // console.log("Tablet:", this.columnPluginsOpenTablet)
  }
  ontoggleSettings() {
    this.columnSettingsOpenMobile = !this.columnSettingsOpenMobile;
    
  }

  onShareChatData(chatData: any) {
    // Update the chat data property with the received data
    this.chatData = chatData;
    console.log("Chat data:", this.chatData);
    // Handle the chat data as needed (e.g., display a modal or perform other actions)
    // this.toggleChatShareModal()
  }
}
