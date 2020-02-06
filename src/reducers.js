//importing all the actions
import { SET_ADD_FEATURES, SET_RESET_PRICE, SET_REMOVE_FEATURE } from "./actions/actions";

//main data
export const initialState = {
  additionalPrice: 23000,
  car: {
    price: 2300,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
    { id: 5, name: "Turbo", price: 10000 },
    { id: 6, name: "Paint Job", price: 2050 },
  ]
};

//root of all reducers
export const rootReducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {
    case SET_ADD_FEATURES:
      return setAddFeatures(state, action);
      case SET_REMOVE_FEATURE:
        return setRemoveFeatures(state,action);
      case SET_RESET_PRICE:
        return setResetTotal(state,action);
    default:
      return state;
  }
};

//all reducers that will go in root reducer
export const setAddFeatures = (state, action) => {
  return {
    //get everything in state
    ...state,
    //now look pass into the car object
    car: {
    //get everything in state.car
      ...state.car,
      //The includes() method determines whether an array includes a certain 
      //value among its entries, returning true or false as appropriate.

      //? now look pass into the features:[] and include action.payload
      features: state.car.features.includes(action.payload)
      //? if feature not added return this...
        ? [...state.car.features]
      //? if feature is added return this... the text is = action.payload
        : [...state.car.features, action.payload]
        
    }
  };
};

export const setRemoveFeatures = (state, action) => {
  return {
    ...state, 
    car: {
      ...state.car,
      features: state.car.features.filter(car => car.id !== action.payload.id)
    }
  }
}

export const setResetTotal = (state, action) => {
  return {
    ...state,
    additionalPrice: state.additionalPrice + action.payload
  };
}

