import logo from '../logo.svg';
import '../App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <p>Body</p>

          <div className="section1">
            <div className="itemsetname">
              <div className="pencil-button">
                <p>pencil button</p>
              </div>
              <p>Item set name</p>
              <div className="itemsetswitch-button">
                <p>item set switch button</p>
              </div>
            </div>
            <div className="level">
              <p>Current Level</p>
              <div className="levelswitch-button">
                <p>level switch button</p>
              </div>
            </div>
            <div className="delete-button">
              <p>Delete Button</p>
            </div>
            <div className="save-button">
              <p>Save Button</p>
            </div>
          </div>
          <div className="section2">

          </div>
        </div>

        <footer className="App-footer">
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
