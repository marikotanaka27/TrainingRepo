import { Stack } from "expo-router/stack";
import { Image } from "react-native";

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
          { 
            // headerTitle:  () => (
            //   <Image
            //     source={require("../assets/images/glogo.jpg")}
            //     style={{width: 200,height:'100%', backgroundColor:"red"}}
            //   />
  
            // ),
            // headerTitle: "メニュー詳細",
            // headerTitleAlign:"center",
            // headerTitleStyle:{
            //   fontSize: 16,
            //   fontWeight: "bold",
              
            // },
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
