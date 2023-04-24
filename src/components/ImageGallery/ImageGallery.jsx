import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onGetLargeImage }) => {
  return (
    <>
      <List>
        {images.map(({ id, webformatURL, tags, largeImageUrl }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallUrl={webformatURL}
              alt={tags}
              onGetLargeImage={onGetLargeImage}
              largeUrl={largeImageUrl}
            ></ImageGalleryItem>
          );
        })}
      </List>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default ImageGallery;
