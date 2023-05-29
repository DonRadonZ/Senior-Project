import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string | null;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const imageSource: ImageSourcePropType =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
