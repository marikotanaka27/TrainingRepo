//　ニュース詳細画面

import * as React from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { useLocalSearchParams} from 'expo-router';

export default function DetailScreen() {
  const {menu} = useLocalSearchParams();

    return (
    <WebView
      style={styles.container}
      source={{ uri: menu}}
    />

  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
