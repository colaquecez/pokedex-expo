import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { PersistGate } from 'redux-persist/integration/react';

import NavigationRoutes from './src/shared/routes/Main.routes';
import { store, persistor } from './src/redux/store';
import { colors } from './src/styles/theme';
import { LogBox } from 'react-native';

if (__DEV__) {
  LogBox.ignoreLogs(['Require cycle:']);
}

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationRoutes />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
