// import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './reducer/rootReducers';

// const store = configureStore({
//   reducer: rootReducer,
//   // Add any middleware or enhancers here
// });

// export default store;
// src/redux/store.js

import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    // Add other reducers if any
  },
});
