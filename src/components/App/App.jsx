import { Component } from 'react';

import fetchImages from '../API/PixabayImages-API';
import Searchbar from '../Searchbar';
import Button from '../Button';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { Container, Text } from './App.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    showButton: false,
    showModal: false,
    status: Status.IDLE,
    modalImage: '',
    imageAlt: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: Status.PENDING });

      fetchImages(this.state.imageName, this.state.page)
        .then(images => {
          if (images.hits.length < 1) {
            this.setState({ showButton: false, status: Status.IDLE });
            return alert('No images on your query');
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));

          this.setState({
            status: Status.RESOLVED,
            showButton:
              this.state.page < Math.ceil(images.total / 12) ? true : false,
          });
        })
        .then(console.log(this.state.images))
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = imageName => {
    if (imageName === this.state.imageName) {
      return;
    }

    this.setState({
      imageName,
      page: 1,
      images: [],
      showButton: false,
      showModa: false,
      status: Status.IDLE,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalImage = event => {
    this.setState({ modalImage: event });
  };

  handleModalAlt = event => {
    this.setState({ imageAlt: event });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, status, showModal, modalImage, imageAlt, showButton } =
      this.state;

    const {
      handleFormSubmit,
      toggleModal,
      handleModalImage,
      handleModalAlt,
      loadMoreImages,
    } = this;

    return (
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />

        {status === Status.IDLE && <Text>Search something!</Text>}

        {status === Status.PENDING && <Loader />}

        {images.length > 0 && (
          <ImageGallery
            showModal={toggleModal}
            images={images}
            handleModalImage={handleModalImage}
            handleModalAlt={handleModalAlt}
          />
        )}

        {showButton && <Button onClick={loadMoreImages} />}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt={imageAlt} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
