import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";

const WeatherInfo = ({ description, icon, name }) => {
  return (
    <View style={styles.box}>
      <View style={styles.textbox}>
        <Text style={styles.maintext}>{name}</Text>
      </View>
      <View style={styles.imagebox}>
        <Image
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
          style={{ width: 95, height: 95 }}
        />
        <Text style={styles.subtext}>{description}</Text>
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },
  textbox: {
    flex: 1,
    padding: 35,
    justifyContent: "center",
  },
  imagebox: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  maintext: {
    fontSize: 17,
  },
  subtext: {
    fontSize: 14,
    color: "darkblue",
  },
});
