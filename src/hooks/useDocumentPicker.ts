// useDocumentPicker.ts

import {useState, useEffect} from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
  DocumentPickerOptions,
} from 'react-native-document-picker';

export const useDocumentPicker = (): {
  selectedFile: DocumentPickerResponse | null;
  pickDocument: () => Promise<void>;
} => {
  const [selectedFile, setSelectedFile] =
    useState<DocumentPickerResponse | null>(null);

  const pickDocument = async (): Promise<void> => {
    try {
      const options: DocumentPickerOptions = {
        type: [DocumentPicker.types.allFiles],
        copyTo: 'cachesDirectory', // Optional - Choose where to copy the picked file (default is cachesDirectory)
      };

      const result = await DocumentPicker.pick(options);
      setSelectedFile(result);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the document picker.');
      } else {
        console.log('Error picking the document:', error);
      }
    }
  };

  return {selectedFile, pickDocument};
};
