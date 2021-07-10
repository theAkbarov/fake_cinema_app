import { CommentWrapper, Button } from './useStyles'
import send from '../../assets/icons/send.svg'
import {useAuth} from '../../services/context/AuthContext'
const Comment = ({movie}) => {
    const currentUser = useAuth()
    return (
        <CommentWrapper>
            <span>{currentUser ? currentUser.currentUser.email.split("")[0].toUpperCase() : ""}</span>
            <input type="text" placeholder={`Write a comment about "${movie && movie.data.name}"`}/>
            <Button>
                <img src={send} alt="" />
            </Button>
        </CommentWrapper>
    )
}

export default Comment
