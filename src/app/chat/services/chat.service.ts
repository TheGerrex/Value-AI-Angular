import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Chat } from '../interfaces/interfaces.chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly chatsUrl = '../../../assets/chats.json';
  constructor(private http: HttpClient) { }

  getChatById(id: number): Observable<Chat> {
    return this.http.get(this.chatsUrl).pipe(
      map((data: any) => data.chats.find((chat: Chat) => chat.id === id))
    );
  }

  getChats(): Observable<{chats: Chat[]}> {
    return this.http.get<{chats: Chat[]}>(this.chatsUrl)
  }
}
