import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../redux/actions";

function Title() {

    const dispatch = useDispatch();
    const text = useSelector(state => state.inputReducer.text)

    const handleChange = e => dispatch(inputText(e.target.value));

    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type="text" onChange={handleChange} value={text}/>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Title;