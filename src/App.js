import './App.css';
import Likes from "./components/Likes";
import Title from "./components/Title";
import Comments from "./components/Comments";
import Spinner from "./components/Spinner";
import {useSelector} from "react-redux";

function App() {
    const error = useSelector(state => state.loaderReducer.error);
    console.log(error);
    return (
        <div className="App">
            <div className="wrap">
                <Spinner/>
                <div className="card">
                    {error && (
                        <div className='error-message'>
                            {error}
                        </div>
                    )}
                    <div className="card-image">
                        <img src="/sea.jpg" alt="surfing"/>
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
