import { StatusBar } from "expo-status-bar";
import { Platform, Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { create } from "twrnc";
import { useCachedResources } from "./src/hooks/useCachedResources";
import Main from "./src/Main";



export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    );
  }
}
