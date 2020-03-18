import React from 'react';
import './App.css';

class FeaturesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.features.map((list) => {
          return <div className="feature-list-container">{list}</div>;
        })}
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="feature-header">
        <h2>Phone Features</h2>
        <HamburgerMenu />
      </div>
    )
  }
}

class HamburgerMenu extends React.Component {
  render() {
    return (
      <div className="hamburgerIcon-container">
        <a className="hamburgerIcon"><span></span></a>
        <a className="hamburgerIcon"><span></span></a>
        <a className="hamburgerIcon"><span></span></a>
      </div>
    )
  }
}

let featArr = ['Subwoofer', 'Non-porousm, washable', 'Wings', 'Bezeled Bezel', 'Bezeled Bevel', 'Seedless'];

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturesList features={featArr} />
      <h4>Add a card...</h4>
    </div>
  );
}

export default App;
