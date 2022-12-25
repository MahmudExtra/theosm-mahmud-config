import { ADD_BUOY, GET_ALL_BUOYS, GET_ALL_BUOY_SUCCESS, GET_BUOY_SUCCESS, GET_INITIAL_BUOY } from "./actionTypes";

export const loadInitialBuoy =()=>{
    return {
      type: GET_INITIAL_BUOY,
    };
}

export const loadInitialBuoySuccess=(value)=>{
    return {
        type: GET_BUOY_SUCCESS,
        payload: value
    }
}

export const loadAllBuoy=()=>{
    return {
      type: GET_ALL_BUOYS,
    };
}

export const loadAllBuoySuccess = (value) => {
  return {
    type: GET_ALL_BUOY_SUCCESS,
    payload: value,
  };
};



export const addBuoys = (value)=>{
    return {
        type: ADD_BUOY,
        payload: {
            name: value.name,
            data: value?.data,
            CO2 : value?.CO2,
            Tide : value?.Tide,
            wind : value?.wind,
            date : value?.date,
            time : value?.time,
        }
    }
}