import { Message } from "./interface.message";


export interface Chat {
    id: number;
    title: string;
    isEditing: boolean;
    chatClient: boolean;
    messages: Message[];
}
