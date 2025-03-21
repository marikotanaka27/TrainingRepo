import { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView, View, Text } from "react-native";
import WeatherInfo from "@/components/weatherinfo";
import Constants from "expo-constants";
import axios from "axios";

// const weatherApiKey = Constants.expoConfig?.extra.weatherApiKey;
// const URI = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=94.04&appid=${weatherApiKey}`
//parameter
// 「q」：必須　都市名、州コード（米国のみ）、国コード
// 「limit」：Apiレスポンス内の場所の数。最大5
// const URI = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
// const URI = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=94.04&exclude=${part}&appid=${weatherApiKey}`

const Hokkaido = {
  name: "北海道",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Asahikawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Touhoku = {
  name: "東北",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Yamagata&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Kantou = {
  name: "関東",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Hokuriku = {
  name: "北陸",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagano&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Toukai = {
  name: "東海",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Nagoya&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Kinki = {
  name: "近畿",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Osaka&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Tyuugoku = {
  name: "中国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Hiroshima&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Sikoku = {
  name: "四国",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Matsuyama&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Kyuusyuu = {
  name: "九州",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Ozu&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};
const Okinawa = {
  name: "沖縄",
  uri: `http://api.openweathermap.org/data/2.5/weather?q=Okinawa&lang=ja&exclude=hourly,minutely&units=metric&&APPID=${Constants.expoConfig?.extra.weatherApiKey}`,
};

const TotalUri = [
  Hokkaido,
  Touhoku,
  Kantou,
  Hokuriku,
  Toukai,
  Kinki,
  Tyuugoku,
  Sikoku,
  Kyuusyuu,
  Okinawa,
];

export default function WeatherNews() {
  const [weather, setWeathers] = useState([]);
  console.log("weatherは"+JSON.stringify(weather));

  useEffect(() => {
    TotalUri.forEach((info) => {
      getWeathers(info);
    });
  }, []);

  // 天気情報取得
  const getWeathers = async (info) => {
    //　非同期処理でApiを実行
    const response = await axios.get(info.uri);
    const weatherData = response.data.weather;
    // お天気情報に各地名を追加
    weatherData[0].name = info.name;
    // console.log("地名追加" + JSON.stringify(weatherData));  
    // setWeathersに設定
    setWeathers((weather) => [...weather, weatherData[0]]);

  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weather}
        renderItem={({ item }) => (
          <WeatherInfo
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        )}
        keyExtractor={(contact, index) => String(index)}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
