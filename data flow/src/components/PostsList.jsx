import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post => (
        <div id="postbox" className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userID={post.userID} />
            </p>
        </div>
    ))
  return (
    <div className="posts-list">
      <h2 id="apptitle">Posts</h2>
      {renderedPosts}
    </div>
  )
}

export default PostsList
