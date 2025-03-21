import React, { useState } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';

const SvgDownloader = () => {
  const [filePath, setFilePath] = useState(null);

  const downloadSvg = async () => {
    const svgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/SVG_Logo.svg';
    const localPath = FileSystem.documentDirectory + 'downloadedImage.svg';

    try {
      const { uri } = await FileSystem.downloadAsync(svgUrl, localPath);
      setFilePath(uri);
      Alert.alert('ダウンロード完了', `保存場所: ${uri}`);
    } catch (error) {
      Alert.alert('エラー', 'SVGのダウンロードに失敗しました');
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="SVGをダウンロード" onPress={downloadSvg} />
      {filePath && <Text>保存先: {filePath}</Text>}
    </View>
  );
};

export default SvgDownloader;
