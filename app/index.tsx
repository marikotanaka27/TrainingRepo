import { Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// スプラッシュ画面を非表示にしないようにする（初期化）
SplashScreen.preventAutoHideAsync();

export default function Home() {
  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2秒待つ

        await SplashScreen.hideAsync(); // スプラッシュ画面を非表示

        router.replace("/(tabs)");
      } catch (error) {
        console.error("Error hiding splash screen:", error);
      }
    };
    prepare();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>アプリ起動中・・・</Text>
    </View>
  );
}
