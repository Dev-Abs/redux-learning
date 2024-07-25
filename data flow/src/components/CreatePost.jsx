import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/userSlice";

const CreatePost = () => {
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState("");

  const dispatch = useDispatch();
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserIDChanged = (e) => setUserID(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userID));
      console.log(title, content);
      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

  return (
    <section className="form">
      <h2 id="apptitle">Create New Post</h2>
      <form id="createpostform">
        <label id="postformtitlelabel" htmlFor="postTitle">
          Post Title:
        </label>
        <input
          id="postformtitleinput"
          onChange={onTitleChanged}
          type="text"
          value={title}
          name="postTitle"
        />

        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" value={userID} onChange={onUserIDChanged}>
          <option value=""></option>
          {userOptions}
        </select>


        <label id="postformcontentlabel" htmlFor="postContent">
          Content:
        </label>
        <textarea
          id="postformcontenttextarea"
          onChange={onContentChanged}
          rows={5}
          cols={52}
          value={content}
          name="postContent"
        />
        <button id="submitButton" type="submit" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
