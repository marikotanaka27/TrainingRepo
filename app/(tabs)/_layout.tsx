import { Tabs } from "expo-router";
import {Image, View, Text, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {

  return (
    <Tabs screenOptions={
      { tabBarActiveTintColor: "#cc0000",
        tabBarStyle: {
          height:55,
          // backgroundColor:"pink",
        }
      }
      
      

    }>
      <Tabs.Screen
        name="index"
        options={{
          // title: "南都銀行法人ポータルサービストップ",
          tabBarLabel:() => (
            <View style={{alignItems:"center"}}>
              <Text style={styles.tabtext}>南都銀行</Text>
              <Text style={styles.tabtext}>法人ポータルサービス</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="bank" size={24} color={color}/>
          ),
          headerTitleAlign:"left",
          headerTitle:  () => (
            <View style ={styles.headerview}>
              <Image
              source={require("../../assets/images/glogo.jpg")}
              style={styles.headerimg}
            />
            <Text style={styles.headertext}>法人ポータルトップ</Text>
            </View>

          ),

        }}
      />

      <Tabs.Screen
        name="weather"
        options={{
          title: "全国のお天気",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sun-o" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({
  headerview:{
    // flex:1,
    // backgroundColor: "gray",
    // borderWidth:2,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop:0,
    paddingHorizontal: 0,
//     verticalAlign: "auto"
  },
  headerimg:{
    // width: "40%",
    width: 90,
    height:'100%',
    resizeMode: "contain",
  },
  headertext:{
    marginLeft: 5,
    color: "#222",
    fontSize: 16,
    marginTop: 5,
    // fontFamily: "",
    fontWeight: "bold",

  },
  tabtext:{
    fontSize:8,
    color:"#cc0000",
    fontWeight:"bold",
  }
});


