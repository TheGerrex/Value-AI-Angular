# ValueAiAngular

This project was generated with [Angular CLI] version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Structure
1. App Modules
 - Pages
   * Login
   * Register
 - Chat
   * Layout-page
     * Chat-page
 - Prompt Library
   * Layout-page
     * Prompt Library-page
 - Dashboard
   * Layout-page
     * Resumen-page
     * Consultas-page
     * Chats-page
     * Agentes-Venta-page
     * Agentes-General-page
 - Shared
   * Navbar
   * Navbar Dashboard

## Services
1. Chat Service
    * getChatbyId(id:number)
    * getChats()
    * updateChatMessages(messages: Message[])
2. Message Service
    * addMessage(text:string, isUserMessage: booelean)
    * getMessages(chatId: string): Message[]
3. Shared Service
    * getChatData(): Observable<any>
    * shareChat(chatData: Chat)
    * updateChatTitle(title:string)
  
## Interface
```
export interface Chat {
    id: string;
    title: string;
    isEditing: boolean;
    chatClient: boolean;
    messages: Message[];
}
```
```
export interface Message {
    text: string;
    timestamp: Date;
    isUserMessage: boolean;
}
```
## JSON Structure For Chats
```
{
    "chats": [{
            "id": 1,
            "title": "Obed Gonzalez",
            "isEditing": false,
            "chatClient": true,
            "messages": [{
                    "text": "Hello, how can I help you?",
                    "timestamp": "2023-09-11T10:00:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "I'd like to inquire about your services.",
                    "timestamp": "2023-09-11T10:01:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Sure! We offer a wide range of services including...",
                    "timestamp": "2023-09-11T10:02:00Z",
                    "isUserMessage": false
                },
                {
                    "text": "That sounds great! Can you provide more details about...",
                    "timestamp": "2023-09-11T10:03:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Of course! Here are the details...",
                    "timestamp": "2023-09-11T10:04:00Z",
                    "isUserMessage": false
                },
                {
                    "text": "Hello, how can I help you?",
                    "timestamp": "2023-09-11T10:00:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "I'd like to inquire about your services.",
                    "timestamp": "2023-09-11T10:01:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Sure! We offer a wide range of services including...",
                    "timestamp": "2023-09-11T10:02:00Z",
                    "isUserMessage": false
                },
                {
                    "text": "That sounds great! Can you provide more details about...",
                    "timestamp": "2023-09-11T10:03:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Of course! Here are the details...",
                    "timestamp": "2023-09-11T10:04:00Z",
                    "isUserMessage": false
                }
            ]
        },
        {
            "id": 2,
            "title": "Chat 2",
            "isEditing": false,
            "chatClient": false,
            "messages": [{
                    "text": "I need help in my Finanicals?",
                    "timestamp": "2023-09-11T10:00:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Sure! I can help you to do this....",
                    "timestamp": "2023-09-11T10:02:00Z",
                    "isUserMessage": false
                },
                {
                    "text": "I really need help, can you check on this dataset?",
                    "timestamp": "2023-09-11T10:03:00Z",
                    "isUserMessage": true
                },
                {
                    "text": "Of course! Here are the details...",
                    "timestamp": "2023-09-11T10:04:00Z",
                    "isUserMessage": false
                }
            ]
        }
    ]
}
```
## Components
 - Chat Module
   * chat-input
 - Dashboard Module
   * filter-dashboard
   * nav-dashboard


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
