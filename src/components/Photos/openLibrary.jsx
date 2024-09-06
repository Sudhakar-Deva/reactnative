import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const openLibrary = () => {
  const [galleryPhoto, setGalleryPhoto] = useState();
  let camImg = {
    SaveToPhoto: true,
    mediatype: 'photo',
  };
  return async () => {
    console.log('open library');
    const result = await launchImageLibrary(camImg);
    setGalleryPhoto(result.assets[0].uri);
  };
};

export default openLibrary;
