import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer'
import logger from './middleware/logger';

import { WidgetOne } from './components/WidgetOne';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

function App() {
  return (
    <Provider store={store}>
      <WidgetOne />
    </Provider>
  );
}

export default App;
