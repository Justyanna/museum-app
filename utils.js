import * as FileSystem from "expo-file-system";

const getUri = async (filename) => {
  const info = await FileSystem.getInfoAsync(
    FileSystem.documentDirectory + filename
  );

  if (!info.exists) {
    const downloadResumable = FileSystem.createDownloadResumable(
      exhibit.photo,
      FileSystem.documentDirectory + filename,
      {},
      () => {}
    );
    const newUri = await downloadResumable.downloadAsync();

    return newUri.uri;
  } else {
    return info.uri;
  }
};

const load = (exhibit) => {
  let splited = exhibit.photo.split("/");
  let filename = splited[splited.length - 1]
    .replace("Plik:", "")
    .replace("File:", "");

  return getUri(filename);
};

export default load;
