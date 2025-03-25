import { Tabs } from "expo-router";
import React, { useEffect, useState, useRef } from "react";
import {Image, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {

  return (
    <Tabs screenOptions={
      { tabBarActiveTintColor: "blue",      }
    }>
      <Tabs.Screen
        name="index"
        options={{
          title: "ニュース一覧",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Entypo size={28} name="news" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="bank"
        options={{
          title: "南都銀行メニュー",
          headerTitleAlign:"left",
          headerStyle: {
          },
          headerTitle:  () => (
            <Image
              source={require("../../assets/images/glogo.jpg")}
              style={{width: 100,height:40,resizeMode: "contain"}}
            />

          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="bank" size={24} color={color} />
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
}
