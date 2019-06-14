import { put, select, takeEvery, delay } from "redux-saga/effects";
import { constants } from "./actions/game";
import { getRandomNumbers } from "./reducers/gameReducer";

const action = (type, payload) => ({ type, payload });

function* startTimer() {
  for (let i = 0; i < 20; i++) {
    yield delay(2000);
    const randomNumberList = yield select(getRandomNumbers);
    let newRand = Math.floor(Math.random() * 80) + 1;
    while (!!randomNumberList.find(item => item === newRand)) {
      newRand = Math.floor(Math.random() * 80) + 1;
    }
    yield put(action(constants.timeoutTicked, newRand));
    yield put(action(constants.updateBoard, newRand));
  }
  yield put({ type: constants.timerStop });
}

export default function* rootSaga() {
  yield takeEvery(constants.startTimer, startTimer);
}
