import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Olawale Ridwanullahi',
        bio: 'A passionate developer.',
        imgSrc: 'rado pics.jpg', // Placeholder image
        profession: 'Software Engineer'
      },
      shows: false,
      timeSinceMounted: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ timeSinceMounted: this.state.timeSinceMounted + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img style={{width: 200, height: 200}} src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}

        <p>Time since last mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
