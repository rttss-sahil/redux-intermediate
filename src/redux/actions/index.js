import actionTypes from './actionTypes';

const actions = {
    addShopping: (id) => {
        const action = {
            type: actionTypes.ADD_SHOPPING,
            id
        };
        return action
    },
    removeShopping: (id) => {
        const action = {
            type: actionTypes.REMOVE_SHOPPING,
            id
        };
        return action
    },
    addGrocery: (id) => {
        const action = {
            type: actionTypes.ADD_GROCERY,
            id
        };
        return action
    },
    removeGrocery: (id) => {
        const action = {
            type: actionTypes.REMOVE_GROCERY,
            id
        };
        return action
    },


}


export default actions