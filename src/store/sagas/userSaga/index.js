
import { takeEvery, takeLatest , call, put, all } from 'redux-saga/effects'
import { useNavigate } from "react-router-dom";
import * as types from '../../../commons/actionTypes'
import {Login,Logout, Register} from '../../../services/UserService'
import * as actions from '../../../actions/userActions'
import * as alert from '../../../actions/alertActions'

function* LoginSaga({payload} ) {

    try {
        yield put(alert.loadingAction())
        const user = yield call(Login,payload)
        yield put(actions.userLoggedIn(user.data))
        
        yield window.location.replace('todo')
        
    } catch (e) {
        yield put(alert.loadedAction())
        yield put(alert.setAlertAction({
            text: 'Đăng nhập thất bại :( ',
            color: 'error'
        }))
        
    }
}

function* RegisterSaga({payload} ) {
    try {
        const user = yield call(Register,payload)
        yield put(actions.userRegistered(user))
        yield put(alert.setAlertAction({
            text: 'Tạo tài khoản thành công :) ',
            color: 'success'
        }))
        
        
    } catch (e) { 
        yield put(alert.setAlertAction({
            text: 'Tạo tài khoản thất bại :( ',
            color: 'error'
        }))
    }
}
function* LogoutSaga({}) {
    console.log("Logout")
    yield call(Logout)
    yield put(actions.userLoggedOutAction())
    yield put(alert.setAlertAction({
        text: 'Tạm biệt :( ',
        color: 'success'
    }))
    yield  window.location.replace('/')
}

function* watchLoginUser() {
    yield takeLatest("LOGIN_USER", LoginSaga)
}
function* watchRegisterUser() {
    yield takeLatest("REGISTER_USER", RegisterSaga)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, LogoutSaga)
}

export default function* userSaga() {
    yield all([
        watchLoginUser(),
        watchRegisterUser(),
        watchLogoutUser()
    ])
}