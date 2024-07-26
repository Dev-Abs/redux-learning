import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// redux?

const initialState = [
  {
    id: "1",
    title: "Learning Redux",
    content:
      "Redux is a state management library that can be used with a variety of web technologies, including React.",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: "2",
    title: "Slices",
    content:
      "Slices are a way to organize different parts of your Redux store.",
    date: sub(new Date(), { minutes: 12 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: "3",
    title: "Reducers",
    content:
      "Reducers specify how the application's state changes in response to actions sent to the store.",
    date: sub(new Date(), { minutes: 8 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: "4",
    title: "Store",
    content: "The store is an object that holds the application's state tree.",
    date: sub(new Date(), { minutes: 7 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: "5",
    title: "Actions",
    content:
      "Actions are payloads of information that send data from your application to your Redux store.",
    date: sub(new Date(), { minutes: 6 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userID) {
        // prepare is a lifecycle method that allows you to define the action payload
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userID,
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, eyes: 0 }
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postID, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postID);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;
