import React from 'react';
import Flatlist from './flatlist';
import flats from '../data/flats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: {
        longitude: '',
        latitude: ''
      }
    };
    this.selectFlat = this.selectFlat.bind(this);
  }

  componentDidMount() {
    this.setState({ flats });
  }

  selectFlat(longitude, latitude) {
    this.setState({
      selectedFlat: { longitude, latitude }
    });
  }

  render() {
    return (
      <div>
        <Flatlist flats={flats} selectedFlat={this.selectFlat} />
      </div>
    );
  }
}

export default App;
