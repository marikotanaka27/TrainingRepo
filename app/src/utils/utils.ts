import * as FileSystem from 'expo-file-system';

// svgファイルダウンロード関数
const downloadSVG = async (url:string) => {
    try {
      const fileUri = FileSystem.documentDirectory + 'downloaded.svg';
      const downloadResult = await FileSystem.downloadAsync(url, fileUri);
      console.log("ダウンロードファイルの場所は："+ downloadResult.uri)
      return downloadResult.uri; // ダウンロードしたファイルの URI を返す
    } catch (error) {
      console.error('SVGのダウンロードに失敗しました:', error);
    }
  };
  
export default downloadSVG;