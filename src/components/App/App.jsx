import { Component } from 'react';
import Searchbar from '../Searchbar';

class App extends Component {
  state = {
    imageName: '',
    images: [],
  };

  componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      fetch(`https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json())
        .then(console.log(this.state.images)).catch(error => console.log(error));
    }
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
      return ( 
        <Searchbar onSubmit={this.handleFormSubmit} />
    );
  };
};

export default App;



// <div style={{
//         height: '100vh',
//          display: 'flex',
//          justifyContent: 'center',
//         alignItems: 'center',
//          fontSize: 40,
//          color: '#010101'
//     }}>React homework template</div>