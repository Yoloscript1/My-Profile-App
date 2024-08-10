import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Dave Oke',
        bio: 'Software Developer with a passion for open-source projects.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer'
      },
      shows: false,
      mountedTime: null,
      interval: null
    };
  }

  componentDidMount() {
    const startTime = new Date();
    this.setState({ mountedTime: startTime });

    this.interval = setInterval(() => {
      this.setState({ interval: Math.floor((new Date() - startTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.bio}</p>
            <h2>{this.state.person.profession}</h2>
          </div>
        )}
        <div>
          <p>Component mounted {this.state.interval} seconds ago.</p>
        </div>
      </div>
    );
  }
}

export default App;
