import { Injectable } from '@angular/core';
import { Message } from '../classes/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];

  constructor() { }

  addMessage(text: string, isUserMessage: boolean) {
    const message = new Message(text, isUserMessage);
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }
}
