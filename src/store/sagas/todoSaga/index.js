import {ApiAddTodo, ApiGetTodo, ApiDeleteTodo, ApiCheckTodo,ApiSaveTodo} from '../../../services/TodoService'
import {takeLatest, put, all, takeEvery, call} from "redux-saga/effects"
import {addTodoSaga,
  deleteTodoSaga,
  checkTodoSaga,
  saveTodoSaga, getTodoSaga} from "../../actions"
import * as alert from '../../../actions/alertActions'

export function* AddTodoSaga({payload}){
  try{
    const todo = yield call(ApiAddTodo,payload)
    yield put(addTodoSaga(todo.data))
    yield put(alert.setAlertAction({
      text: 'ADD SUCCESS',
      color: 'success'
  }))
  }
  catch (e) {
    yield put(alert.setAlertAction({
      text: 'ADD FAIL',
      color: 'danger'
  }))
  }
  
}
export function* AddTodo(){
  yield takeLatest("ADD_TODO", AddTodoSaga)
}
export function* GetTodoSaga(){
  try{
    const todo= yield call(ApiGetTodo)
    console.log("Todo saga", todo)
    yield put(getTodoSaga(todo.data ))
  }
  catch (e) {
  }
  
}
export function* GetTodo(){
  yield takeLatest("GET_TODO", GetTodoSaga)
}

export function* DeleteTodoSaga({id}){
  try{
    const todo =yield call(ApiDeleteTodo,id)
    yield put(deleteTodoSaga(todo.data.id))
    yield put(alert.setAlertAction({
      text: 'DELETE SUCCESS',
      color: 'error'
  }))
  }
  catch (e) {
    yield put(alert.setAlertAction({
      text: "DELETE FAIL",
      color: 'danger'
  }))
  }
 
}
export function* DeleteTodo(){
  yield takeLatest("DELETE_TODO", DeleteTodoSaga)
}
export function* CheckTodoSaga({payload}){                                                             
  try{
    const todo = yield call(ApiCheckTodo,payload)
    yield put(checkTodoSaga(todo.data.id, todo.data.status))
    yield put(alert.setAlertAction({
      text: 'CHECK SUCCESS',
      color: 'success'
  }))
  }
  catch (e) {
  }
}
export function* CheckTodo(){
  yield takeLatest("CHECK_TODO", CheckTodoSaga)
}
export function* SaveTodoSaga({payload,text}){                                                             
  try{
    if(text===''|| text===payload.title)
    {
      yield put(alert.setAlertAction({
        text: 'UPDATE FAILED',
        color: 'error'
    }))
    }
    else{
    const todo = yield call(ApiSaveTodo,payload, text)
    yield put(saveTodoSaga(todo.data.id, todo.data.title))
    yield put(alert.setAlertAction({
      text: 'UPDATE SUCCESS',
      color: 'success'
    }))}
  }
  catch (e) {
  }
 
}
export function* SaveTodo(){
  yield takeLatest("SAVE_TODO", SaveTodoSaga)
}