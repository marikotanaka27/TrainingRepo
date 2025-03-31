import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
console.log(width);

const MenuList = ({ title, img, onPress }) => {
  const images = {
    1 : require("../assets/images/unyou.png"),
    2 : require("../assets/images/tyoutatsu.png"),
    3 : require("../assets/images/kouritsu.png"),
    4 : require("../assets/images/keiei.png"),
    5 : require("../assets/images/service.png"),
  };
  console.log(img);
  const imageKey = img;
  console.log(images[imageKey]);

  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.textbox}>
        <Image style={styles.imgbox} source={images[imageKey]} resizeMode="contain"/>
        <Text style={styles.maintext}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.5}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 0,
    // padding: 0,
    width: width * 0.3,
    height: 140,
    marginTop: 40,
    // backgroundColor:"pink"
  },
  textbox: {
    width: 110,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 5, // 左右の余白
    backgroundColor: "#fff"
  },
  maintext: {
    fontSize: 12,
    fontWeight:"bold",
    marginHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: "purple"
  },
  imgbox: {
    width: 40,
    height: 40,
    marginBottom: 15,
    // backgroundColor:"yellow",
  }
});
