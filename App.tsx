import { NavigationContainer } from '@react-navigation/native';
import NavigationRoutes from './src/shared/routes/Main.routes';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
}
