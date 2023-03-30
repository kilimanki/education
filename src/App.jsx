import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './userRoutes';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/education">
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
