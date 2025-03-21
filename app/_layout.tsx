import { Stack } from "expo-router/stack";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* タブ */}
      <Stack.Screen 
        name="(tabs)"
        options={{ headerShown: false }} />
        

      {/* 銀行 */}
      {/* <Stack.Screen
        name="bank/index"
        options={{ headerTitle: "南都銀行メニュー" }}
      /> */}
      <Stack.Screen
        name="bank/detailmenu"
        options={{ headerTitle: "メニュー詳細" }}
      />

      {/* news一覧*/}
      {/* <Stack.Screen
        name="news/index"
        options={{ headerTitle: "ニュース一覧" }}
      /> */}
      {/* news詳細*/}
      <Stack.Screen
        name="news/detailscreen"
        options={{ headerTitle: "ニュース詳細" }}
      />
    </Stack>
  );
}
