import { CommentWrapper, Button } from './useStyles'
import send from '../../assets/icons/send.svg'
const Comment = ({movie}) => {
    return (
        <CommentWrapper>
            <span>U</span>
            <input type="text" placeholder={`Write a comment about "${movie && movie.data.name}"`}/>
            <Button>
                <img src={send} alt="" />
            </Button>
        </CommentWrapper>
    )
}

export default Comment
