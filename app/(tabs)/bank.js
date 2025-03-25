// 銀行メニュー一覧画面

import { StyleSheet, FlatList} from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import MenuList from "@/components/menulist";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DOMParser } from "react-native-html-parser";


const URI = "https://www.nantobank.co.jp/hojin/";
const svgURL = "https://www.nantobank.co.jp/common/img/glogo.svg";

const NANTOMENU = [
  {
    id: "hojin-title01",
    title: "",
    url: "",
  },
  {
    id: "hojin-title02",
    title: "",
    url: "",
  },
  {
    id: "hojin-title03",
    title: "",
    url: "",
  },
  {
    id: "hojin-title04",
    title: "",
    url: "",
  },
  {
    id: "hojin-title05",
    title: "",
    url: "",
  },
];

export default function NamtoBkMenu() {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const response = await axios
      .get(URI)
      .then((response) => {
        // DOMParser を使って HTML を解析
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");

        // NANTOMENUにタイトルとリンクをセット
        for (let i = 0; i < NANTOMENU.length; i++) {
          const element = doc.getElementById(NANTOMENU[i].id);
          // 各タイトルセット
          const elemvalue = element ? element.textContent : "テキストなし";
          NANTOMENU[i].title = elemvalue;

          // その他のアンカータグセット用（その他のアンカータグ）
          const elemsonota = doc.getElementById("sonota");
          const sonota = elemsonota.getAttribute("id");

          // 各urlをセット
          const aTag = element.getElementsByTagName("a")[0];
          const hrefURL = aTag ? aTag.getAttribute("href") : "#" + sonota;
          NANTOMENU[i].url = URI + hrefURL;

          if (i == 4) {
            // その他のアンカータグ用に最後の"/"削除
            const itemURL = URI.slice(0, -1);
            NANTOMENU[i].url = itemURL + "#" + sonota;
          }

        }

        setMenu(NANTOMENU);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <MenuList
            title={item.title}
            onPress={() => {
              router.push({
                pathname: "/bank/detailmenu",
                params: { menu: item.url },
              });
            }}
          />
        )}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
