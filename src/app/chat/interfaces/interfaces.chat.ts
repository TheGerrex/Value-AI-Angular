import { Message } from "./interface.message";


export interface Chat {
    id: string;
    title: string;
    isEditing: boolean;
    chatClient: boolean;
    messages: Message[];
}
