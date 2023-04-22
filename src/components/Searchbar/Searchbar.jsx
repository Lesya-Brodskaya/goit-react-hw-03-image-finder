import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        searchImage: '',
    };

    handleSearchChange = event => {
        this.setState({ searchImage: event.currentTarget.value.toLoverCase() })
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchImage.trim() === '') {
            alert('Please, enter image name.')
            return;
        }
        this.props.onSubmit(this.state.searchImage);
        this.setState({ searchImage: '' });
    }

    render() {
        return (
            <header class="searchbar">
                <form class="form">
                    <button type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleSearchChange}
                    />
                </form>
            </header>
        );
    };
};

export default Searchbar;