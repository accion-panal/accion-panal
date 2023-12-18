import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { company } from '../../../constants/consts/company';
import PropertiesServices from '@/services/PropertiesServices';

const GalleryCarousel = ({ propertyImage }) => {

  const getImages = () => {
    return propertyImage
      ? propertyImage.map((item, idx) => ({
        original: item,
        thumbnail: item,
      }))
      : [];
  }

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={true}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      showThumbnails={true}
      thumbnailPosition="bottom"
      items={getImages()}
    />
  )
}

export default GalleryCarousel
