// ニュース一覧画面

import { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView,Text } from "react-native";
import NewsArticle from "@/components/newsarticle";
import Constants from "expo-constants";
import axios from "axios";
import { router } from "expo-router";

const newsApiKey = Constants.expoConfig?.extra.newsApiKey;
const URI = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${newsApiKey}`;
// const URI = `https://newsapi.org/v2/top-headlines?country=jp&language=ja&category=general&apiKey=${newsApiKey}`


export default function NewsScreen() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios
      .get(URI)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((err) => console.log(err));
      
  };

  // 第二引数からの場合　画面表示の時に1度アラートが表示
  useEffect(() => {
    getNews();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data = {news}
          renderItem = { ({ item }) => (
            <NewsArticle
              imageurl = {item.urlToImage}
              title = {item.title}
              subtext = {item.publishedAt}
              onPress={ () => {router.push ({ pathname: "/news/detailscreen", params:{article: item.url}}  );}}
              // onPress = {handlePress, {article: {item}}}
            />
          )}
        />
      </SafeAreaView> 
     
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
