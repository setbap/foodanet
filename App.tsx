import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./src/utils/index";
import Navigation from "./src/navigation/index";
// @ts-ignore
import RNRestart from "react-native-restart";
import { I18nManager } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@my-style/theme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import store from "./src/store/store";
import { Provider } from "react-redux";
export const forceAppRTL = () => {
  if (!I18nManager.isRTL) {
    I18nManager.forceRTL(true);
    RNRestart.Restart();
  }
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  forceAppRTL();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <BottomSheetModalProvider>
              <Navigation colorScheme={"light"} />
              <StatusBar />
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
