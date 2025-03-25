import { Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import downloadSVG from "./src/utils/utils";
import * as FileSystem from 'expo-file-system';

// スプラッシュ画面を非表示にしないようにする（初期化）
SplashScreen.preventAutoHideAsync();


export default function Home() {
  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2秒待つ
      await SplashScreen.hideAsync(); // スプラッシュ画面を非表示
      const timer = setTimeout(() => {
        router.replace("/(tabs)");
        //   // router.replace('/news');
        //   // router.replace('/bank');
        //   router.replace('/weather');
      }, 2000);
      return () => clearTimeout(timer);
    };
    prepare();
    // const timer = setTimeout(() => {
    //   router.replace('/(tabs)');
    // //   // router.replace('/news');
    // //   // router.replace('/bank');
    // //   router.replace('/weather');
    // }, 2000);
    // return () => clearTimeout(timer);
  }, []);


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>アプリ起動中・・・</Text>
    </View>
  );
}
