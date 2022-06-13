
import loggerMiddleware from "./logger";
import routerMiddleware from "./router";
import sagaMiddleware from "./saga";


const middlewares =  (history) => {
  return [routerMiddleware(history), loggerMiddleware, sagaMiddleware];
}

export default middlewares;