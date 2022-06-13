import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {resetAlertAction} from "../../actions/alertActions"

const AlertPage = ()  => {
  const alert = useSelector((state) => state.alertReducer)
  const dispatch = useDispatch()
  if(alert.text!==''){
    setTimeout(() => dispatch(resetAlertAction()), 3000)
  }
  
  if(alert.text === ''){
    return <></>
  }
  else
  return (
    <div className="Zdex">
       <Alert sx={{justifyContent: "center"}} severity={alert.color}>
        <AlertTitle>{alert.text}</AlertTitle>
      </Alert>
    </div>
  );
}

export default AlertPage; 