import React from 'react';
import {Provider} from 'react-redux'; // Import Provider from react-redux
import store from './src/redux/store'; // Assuming you have a configured Redux store
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
