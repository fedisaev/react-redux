import {
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    COMMENTS_LOAD,
    DECREMENT,
    INCREMENT,
    INPUT_TEXT,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON
} from "../constants/constants";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text,
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: {text, id},
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: {text, id},
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({
            type: LOADER_DISPLAY_ON,
            text
        });
        setTimeout(() => {
            dispatch(errorOff())
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}


export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const jsonData = await response.json();
            dispatch({
                type: COMMENTS_LOAD,
                data: jsonData,
            })
            dispatch(loaderOff());
        } catch (e) {
            dispatch(errorOn('API ERROR'));
            dispatch(loaderOff());
        }
    }
}