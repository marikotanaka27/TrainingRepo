import { StyleSheet, Text, View,  TouchableOpacity } from "react-native";

const MenuList = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.textbox}>
        <Text style={styles.maintext}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    // borderColor: "#cc0000",
  },
  textbox: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderWidth: 1,
    borderColor: "red",
  },
  maintext: {
    fontSize: 18,
  },
});
