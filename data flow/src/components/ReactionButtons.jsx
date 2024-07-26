import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postsSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
    };

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            className="muted-button reaction-button"
            onClick={() =>
                dispatch(reactionAdded({ postID: post.id, reaction: name }))
            }
        >
            {emoji} {post.reactions[name]}
        </button>
    ));
    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;