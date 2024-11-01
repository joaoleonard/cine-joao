import { useFonts } from "expo-font";
import { Routes } from "./src/routes";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { View } from "react-native";
import Loading from "./src/screens/Loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold });

  return (
    <View style={{flex: 1}}>
      <StatusBar style="dark" />
      {fontLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
