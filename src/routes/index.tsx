import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes'; // aqui já temos criada nossas rotas

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}