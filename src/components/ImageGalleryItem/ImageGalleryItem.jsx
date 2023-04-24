import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smallUrl, alt, largeUrl, onGetLargeImage }) => {
  return (
    <Item onClick={() => onGetLargeImage({ largeUrl, alt })}>
      <Img src={smallUrl} alt={alt} width="300" />
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
