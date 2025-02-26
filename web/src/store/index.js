import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';
import initialState from './reducers/initialState';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'actionModal',
    'errors',
    'projects',
    'marketplace',
    'user',
    'mergeRequests',
    'datainstances',
    'visualizations',
    // 'tutorial',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));

// this function is useful to debug, you can get the current state in console with
// > getState()
// this should be deleted before release.
window.getState = () => store.getState();

export default store;
