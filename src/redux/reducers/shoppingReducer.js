import actionTypes from '../actions/actionTypes';
import groceryItemsList from '../../data/groceryItems.json';

const initialState = {
    bag: [],
    details: {
        cost: 0,
        calories: 0,
        weight: 0
    }
}


const shoppingReducer = (state = initialState, action) => {
    if (action === undefined) return state;
    switch (action.type) {

        case actionTypes.ADD_SHOPPING:
            {

                const newItem = addToBagbyId(action.id);
                const newState = {
                    ...state,
                    bag: [
                        ...state.bag,
                        newItem
                    ]
                }
                return {
                    ...newState,
                    details: {
                        ...newState.details,
                        cost: findTotal(newState, "cost"),
                        calories: findTotal(newState, "calories"),
                        weight: findTotal(newState, "weight")
                    }

                }
            }

        case actionTypes.REMOVE_SHOPPING:
            const newBag = state.bag.filter(x => x.id !== action.id)
            const newState = {
                ...state,
                bag: newBag,
            }
            return {
                ...newState,
                details: {
                    ...newState.details,
                    cost: findTotal(newState, "cost"),
                    calories: findTotal(newState, "calories"),
                    weight: findTotal(newState, "weight")
                }
            }

        default:
            return state;
    }
}


const findTotal = (state, value) => state.bag.reduce((total, item) => total + item[value], 0);



export const addToBagbyId = id => groceryItemsList.find(item => item.id === id);

export default shoppingReducer;