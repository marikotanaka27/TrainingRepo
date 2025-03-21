import { Tabs } from "expo-router";
import React, { useEffect, useState, useRef } from "react";
import { ActivityIndicator, View, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { WebView } from "react-native-webview";
import { SvgUri } from "react-native-svg";
import * as FileSystem from "expo-file-system";

const SvgHeader = () => (
  <View
    style={{
      flex: 1,
      width: 200,
      // flexDirection: "row",
      // alignItems: "flex-start",
      // backgroundColor: "blue",
      // margin:20,    
    }}
  >
    <WebView
      source={{ uri: "https://www.nantobank.co.jp/common/img/glogo.svg" }}
      style={{ flex: 1, width: 200}}
      scrollEnabled={false}
      nestedScrollEnabled={false}
      containerStyle={{ overflow: "hidden" }}
      renderLoading={() => <ActivityIndicator />}
      injectedJavaScript={`
      const svgElement = document.querySelector('svg');
      if (svgElement) {
      svgElement.setAttribute('width', '70%');
      svgElement.setAttribute('height', '100%');
    }
    true;
  `}
    />
  </View>
);

export default function TabLayout() {
  const [svgContent, setSvgContent] = useState<string>(""); // SVG内容を保存するステート
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const downloadAndSaveSvg = async () => {
    setIsLoading(true);

    try {
      // SVGファイルのURL
      const svgUrl = "https://www.nantobank.co.jp/common/img/glogo.svg";

      // ファイルをローカルに保存するパスを指定
      const localUri = FileSystem.documentDirectory + "downloaded_svg.svg";

      // 外部URLからファイルをダウンロードしてローカルに保存
      const response = await FileSystem.downloadAsync(svgUrl, localUri);

      // ダウンロードしたSVGファイルの内容を取得
      const fileContent = await FileSystem.readAsStringAsync(response.uri);
      console.log("だうんろーど" + fileContent);

      // SVG内容をステートに保存
      setSvgContent(fileContent);
    } catch (error) {
      console.error("Error downloading SVG:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 画面が表示されたときに自動的にSVGファイルをダウンロード
    downloadAndSaveSvg();
  }, []);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "ニュース一覧",
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
            // backgroundColor: "green", 
          },
          headerTitle: () => <SvgHeader />,
          tabBarIcon: ({ color }) => (
            <AntDesign name="bank" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "全国のお天気",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sun-o" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
