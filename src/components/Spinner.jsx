import {Audio} from 'react-loader-spinner';
import {useSelector} from "react-redux";

function Spinner() {
    const loading = useSelector(state=> state.loaderReducer.loading)
    return (
        <div className='loader-styles'>
            <Audio type='TailSpin'
                    color='#00BFFF'
                    height={100}
                    width={100}
                    visible={loading}
            />
        </div>
    );
}

export default Spinner;