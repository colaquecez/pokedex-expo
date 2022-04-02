import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import NavigationRoutes from './src/shared/routes/Main.routes';
import store from './src/redux/store';
import { colors } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <Provider store={store}>
          <NavigationRoutes />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
