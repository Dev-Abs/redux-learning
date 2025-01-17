import { useSelector } from "react-redux"
import { selectAllUsers } from "../features/users/userSlice"
const PostAuthor = ({userID}) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userID)
    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor
