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
2. Message Service
    * addMessage(text:string, isUserMessage: booelean)
    * getMessage()
3. Shared Service
    * updateChatTitle(title:string)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
