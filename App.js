import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"; // как провайдер в реакте обвертка BrowserRouter

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import useRoute from "./router";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);
  const routing = useRoute(true);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Keep the splash screen visible while we fetch resources
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
        // Pre-load fonts, make any API calls you need to do here
        await SplashScreen.hideAsync();
        // This tells the splash screen to hide immediately!
      } catch (e) {
        console.warn(e);
      } finally {
        setFontIsLoaded(true);
        // Tell the application to render
      }
    }
    prepare();
  }, []);

  if (!fontIsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
