import { Injectable } from '@angular/core';
import { Message } from '../classes/message';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private chatMessages: { [chatId: string]: Message[] } = {};

  constructor(private chatService: ChatService) {
    
  }

  addMessage(chatId: string, text: string, isUserMessage: boolean) {
    if (!this.chatMessages[chatId]) {
      this.chatMessages[chatId] = [];
    }
    const message = new Message(text, isUserMessage);
    this.chatMessages[chatId].push(message);
    console.log(this.chatMessages);
  }

  getMessages(chatId: string): Message[] {
    console.log("getMessage Function",this.chatMessages[chatId]);
    return this.chatMessages[chatId] || [];
  }
}
