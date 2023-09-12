import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  chatTitle: string | undefined;
  chatTitleChanged = new EventEmitter<string>();

  updateChatTitle(title: string) {
    this.chatTitle = title;
    this.chatTitleChanged.emit(title);
  }
  constructor() { }
}
