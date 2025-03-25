import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title:"",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "black",
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
      <Stack.Screen
        name="bank/detailmenu"
        options={
          { headerTitle: "メニュー詳細",
            headerTitleAlign:"center",

          }
       }
      />

      {/* news詳細*/}
      <Stack.Screen
        name="news/detailscreen"
        options={{ 
          headerTitleAlign:"center",
          headerTitle: "ニュース詳細",

         }}
      />
    </Stack>
  );
}
