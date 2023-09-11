export class Message {
    text: string;
    timestamp: Date;
    isUserMessage: boolean;

    constructor(text: string, isUserMessage: boolean) {
        this.text = text;
        this.timestamp = new Date();
        this.isUserMessage = isUserMessage;
    }
}
