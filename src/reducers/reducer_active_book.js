'use strict';

// State argument is not  application state, it's only the state
// That this reducer is responsible for. Each reducer has its own state object.
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}