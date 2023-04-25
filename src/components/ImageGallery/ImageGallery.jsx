import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, onGetLargeImage, showModal }) => {
  return (
    <>
      <List>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              showModal={showModal}
              smallUrl={webformatURL}
              alt={tags}
              onGetLargeImage={onGetLargeImage}
              largeUrl={largeImageURL}
            />
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
