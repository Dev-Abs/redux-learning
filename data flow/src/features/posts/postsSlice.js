import { createSlice,nanoid } from "@reduxjs/toolkit";

// redux? 

const initialState = [
    {
        id: '1',
        title: 'Learning Redux',
        content: 'Redux is a state management library that can be used with a variety of web technologies, including React.'
    },
    {
        id: '2',
        title: 'Slices', 
        content: 'Slices are a way to organize different parts of your Redux store.'
    },
    {
        id: '3',
        title: 'Reducers',
        content: 'Reducers specify how the application\'s state changes in response to actions sent to the store.'
    },
    {
        id: '4',
        title: 'Store',
        content: 'The store is an object that holds the application\'s state tree.'
    },
    {
        id: '5',
        title: 'Actions',
        content: 'Actions are payloads of information that send data from your application to your Redux store.'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: 
        {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userID) { // prepare is a lifecycle method that allows you to define the action payload
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userID
                    }
                }
            }
        }
    }
})

export const selectAllPosts = state => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer



