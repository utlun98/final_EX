
import { call, all } from 'redux-saga/effects'
import userSaga from "./userSaga"
import {AddTodo, GetTodo, DeleteTodo, CheckTodo, SaveTodo} from "./todoSaga"
export function* todos(){
  yield all([call(DeleteTodo) ,call(AddTodo),call(GetTodo), call(SaveTodo), call(CheckTodo), call(userSaga)])
}