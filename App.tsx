import { config } from "./config/gluestack-ui.config";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1}>
        <Routes />
      </Box>
    </GluestackUIProvider>
  );
}
