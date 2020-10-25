import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';

const initialState = {};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(),
  ),
);

export default store;
