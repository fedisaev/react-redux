import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {commentDelete, commentUpdate} from "../redux/actions";

function SingleComment({data}) {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, data?.id));
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(commentDelete(data?.id))
    }

    useEffect(() => {
        if (data?.text) {
            setCommentText(data?.text)
        }
    }, [data?.text]);

    const handleInput = e => setCommentText(e.target.value);

    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    );
}

export default SingleComment;