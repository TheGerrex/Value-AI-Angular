import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Chat } from '../interfaces/interfaces.chat';
import { Message } from '../interfaces/interface.message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly chatsUrl = '../../../assets/chats.json';
  private chatMessagesSubject = new BehaviorSubject<Message[]>([]);
  chatMessages$ = this.chatMessagesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getChatById(id: number|string): Observable<Chat> {
    return this.http.get<Chat>(this.chatsUrl).pipe(
      map((data: any) => data.chats.find((chat: Chat) => chat.id === id))
    );
  }

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsUrl)
  }

  getChatMessages(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsUrl);
  }


  updateChatMessages(messages: Message[]) {
    this.chatMessagesSubject.next(messages);
  }
  
}
