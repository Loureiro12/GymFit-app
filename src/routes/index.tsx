import { NavigationContainer } from '@react-navigation/native';

import { Box } from '@gluestack-ui/themed';
import { AuthRoutes } from './auth.routes';

function Routes() {
  return (
    <Box flex={1} bg="$white">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}

export default Routes;
