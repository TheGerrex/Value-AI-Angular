import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from 'src/app/chat/interfaces/interfaces.chat';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  chatTitle: string | undefined;
  chatTitleChanged = new EventEmitter<string>();
  private chatDataSubject = new BehaviorSubject<any>(null);
  chatData$ = this.chatDataSubject.asObservable();
  chatData: any;

  shareChat(chatData: Chat) {
    console.log(chatData);
    this.chatDataSubject.next(chatData);
  }

  getChatData(): Observable<any> {
    return this.chatDataSubject.asObservable();
  }

  updateChatTitle(title: string) {
    this.chatTitle = title;
    this.chatTitleChanged.emit(title);
  }
  constructor() { }
}
