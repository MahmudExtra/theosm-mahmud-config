import { takeEvery, put, call } from "redux-saga/effects";
import { getAllBuoys, getInitialBuoy } from "../../graphql/BuoysNetwork/Queries";
import { loadAllBuoySuccess, loadInitialBuoySuccess } from "./actions";
import { GET_ALL_BUOYS, GET_INITIAL_BUOY } from "./actionTypes";

function* fetchInitialBuoy (){
    try {
        const response = yield call(getInitialBuoy);
        yield put(loadInitialBuoySuccess(response));
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllBuoy(){
    try {
        const response = yield call(getAllBuoys);
        yield put(loadAllBuoySuccess(response));
    } catch (error) {
        console.log(error);
    }
}

function* buoySaga() {
    yield takeEvery(GET_INITIAL_BUOY, fetchInitialBuoy);
    yield takeEvery(GET_ALL_BUOYS, fetchAllBuoy);
}

export default buoySaga;