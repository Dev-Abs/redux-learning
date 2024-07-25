import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '0',
        name: 'Tiago',
        email: ''
    },
    {
        id: '1',
        name: 'João',
        email: ''
    },
    {
        id: '2',
        name: 'Maria',
        email: ''
    },
    {
        id: '3',
        name: 'Ana',
        email: ''
    },
    {
        id: '4',
        name: 'Pedro',
        email: ''
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllUsers = state => state.users;
export const { userAdded } = userSlice.actions
export default userSlice.reducer