import actionTypes from '../actions/actionTypes';
import groceryItemsList from '../../data/groceryItems.json';
import { addToBagbyId } from './shoppingReducer';

const groceryReducer = (state = groceryItemsList, action) => {
    switch (action.type) {

        case actionTypes.ADD_GROCERY:
            const newItem = addToBagbyId(action.id);
            return [
                ...state,
                newItem
            ]

        case actionTypes.REMOVE_GROCERY:
            const newState = state.filter(x => x.id !== action.id)
            return newState;

        default:
            return state;
    }
}

export default groceryReducer;