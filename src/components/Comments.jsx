import SingleComment from "./SingleComment";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {commentCreate, commentsLoad} from "../redux/actions";

function Comments() {

    const [comment, setComment] = useState('');
    const handleComment = e => setComment(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(comment, id));
    };

    useEffect(()=>{
        dispatch(commentsLoad());
    },[])

    const dispatch = useDispatch();
    const comments = useSelector(state => state.commentsReducer.comments)

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={comment} onChange={handleComment}/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map(comment => (
                <SingleComment key={comment.id} data={comment}/>
            ))}
        </div>
    );
}

export default Comments;