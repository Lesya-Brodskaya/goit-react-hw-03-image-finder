import { Component } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleSearchChange = event => {
    this.setState({ searchImage: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImage.trim() === '') {
      alert('Please, enter image name');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size="30" />
          </SearchFormButton>
          <Input
            assName="input"
            type="text"
            autocomplete="off"
            toFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleSearchChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
