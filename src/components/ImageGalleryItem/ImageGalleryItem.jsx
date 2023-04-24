import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  smallUrl,
  alt,
  largeUrl,
  onGetLargeImage,
  showModal,
}) => {
  return (
    <Item
      onClick={() => {
        onGetLargeImage({ largeUrl: largeUrl, alt: alt });
        showModal();
      }}
    >
      <Img src={smallUrl} alt={alt} largeUrl={largeUrl} width="300" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  onGetLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
