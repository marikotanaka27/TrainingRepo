import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const NewsArticle = ({ imageurl, title, subtext, onPress }) => {
  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth();
  console.log(month);
  var day = date.getDay();
  var publishdate = year + "年" + month + "月" + day + "日";

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.textbox}>
        <Text numberOfLines={3} style={styles.maintext}>{title}</Text>
        <Text style={styles.subtext}>{publishdate}</Text>
      </View>
      <View style={styles.imagebox}>
        <Image
          source={{ uri: imageurl }}
          /*source={require('../assets/images/react-logo.png')}*/
          style={{ width: "100%", height: 100 }}
        />
      </View>
    </TouchableOpacity>

  );
};

export default NewsArticle;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
  },
  textbox: {
    justifyContent: "space-between",
    flex: 1,
    //    backgroundColor: "steelblue",
    padding: 16,
  },
  imagebox: {
    width: 100,
    backgroundColor: "powderblue",
  },
  maintext: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "darkblue",
  },
});
