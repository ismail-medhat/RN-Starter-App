// useUploadImage.ts

import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const useUploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (!response.didCancel && !response.errorMessage) {
          setSelectedImage(response.uri);
        }
      },
    );
  };

  return {selectedImage, selectImage};
};

export default useUploadImage;
