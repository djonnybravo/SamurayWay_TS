
export type PostsType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts:Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
let state: RootStateType = {
    profilePage : {
        posts: [
            {id: 1, message: "Hey, hello, how are you", likes: 10},
            {id: 2, message: "hello, i am good, and you", likes: 10},
            {id: 3, message: "I am good too, thanks", likes: 10},
            {id: 4, message: "This is great", likes: 10},
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hey"},
            {id: 2, message: "HELLO"},
            {id: 3, message: "YO"},
            {id: 4, message: "YO"},
        ]
    },

}



export default state