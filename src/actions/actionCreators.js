import { SET_ADD_FEATURES, SET_RESET_PRICE, SET_REMOVE_FEATURE} from "./actions"

export const addingFeature = addFeature => {
    return {
        type: SET_ADD_FEATURES,
        payload: addFeature
    }
}

export const removeFeature = removeFeature => {

    return {
        type: SET_REMOVE_FEATURE,
        payload: removeFeature
    }
}


export const updateTotalPrice = totalPrice => {
    return {
        type: SET_RESET_PRICE,
        payload: totalPrice
    }
}