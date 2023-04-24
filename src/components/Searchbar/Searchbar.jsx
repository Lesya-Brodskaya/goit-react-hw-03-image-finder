import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

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
      alert('Please, enter image name.');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <Header>
        <Form omSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <Input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
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
