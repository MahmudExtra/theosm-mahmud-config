import { ADD_BUOY, GET_ALL_BUOY_SUCCESS, GET_BUOY_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  initalBuoy: {
    name: "",
    data: [],
    CO2: {
      data: [],
      categories: [],
    },
    Tide: {
      data: [],
      categories: [],
    },
    wind: "",

    date: "",

    time: "",
  },
  allBuoys: [],
  initialBuoyLoading: false,
  allBuoysLoading: false,
};

const Buoys = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BUOY_SUCCESS:
      return {
        ...state,
        initalBuoy: action.payload,
        initialBuoyLoading: true,
      };

      case GET_ALL_BUOY_SUCCESS:
        return {
          ...state,
          allBuoys: action.payload,
          allBuoysLoading:true,
        };
    case ADD_BUOY:
      return {
        ...state,
        initalBuoy: action.payload,
      };
    default:
      return state;
  }
};
export default Buoys;
