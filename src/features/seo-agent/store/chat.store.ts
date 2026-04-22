import { create } from "zustand";
import { persist } from 'zustand/middleware';


interface chatStoreType {
    chat: {
        req: string,
        res: string
    }[]

    setChat: (req: string) => void
}

export const chatStore = create<chatStoreType>()(
    persist((set) => ({
        chat: [],
        setChat: (input: string) => {
            set(state => ({
                ...state,
                chat: [...state.chat, { req: input, res: "" }]
            }))
        }
    }), { name: 'seo-chat' })
)