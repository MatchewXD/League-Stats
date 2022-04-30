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
                <button>pencil button</button>
              </div>
              <p>Unnamed Item Set</p>
              <div className="itemsetswitch-button">
                <button>item set switch button</button>
              </div>
            </div>
            <div className="level">
              <p>Current Level</p>
              <div className="levelswitch-button">
                <button>level switch button</button>
              </div>
            </div>
            <div className="section1a">
              <div className="delete-button">
                <button>Delete Button</button>
              </div>
              <div className="save-button">
                <button>Save Button</button>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="section2a">
              <div className="filteroptions">
                <p>filteroptions</p>
                <div className="foption"><p>filter Option 1</p></div>
                <div className="foption"><p>filter Option 2</p></div>
                <div className="foption"><p>filter Option 3</p></div>
                <div className="foption"><p>filter Option 4</p></div>
                <div className="foption"><p>filter Option 5</p></div>
                <div className="foption"><p>filter Option 6</p></div>
              </div>
              <div className="items">
                <p>items</p>
                <div className="itemsearch">
                  <p>item search</p>
                </div>
                <div className="item"><p>example item 1</p></div>
                <div className="item"><p>example item 2</p></div>
                <div className="item"><p>example item 3</p></div>
                <div className="item"><p>example item 4</p></div>
                <div className="item"><p>example item 5</p></div>
                <div className="item"><p>example item 6</p></div>
              </div>
            </div>
            <div className="section2b">
              <div className="section2b1">
                <div className="championportrait">
                  <p>champion Portrait</p>
                </div>
                <div className="championname">
                  <p>champion name</p>
                </div>
              </div>
              <div className="section2b2">
                <div className="statblock">
                  <p>statblock</p>
                </div>
              </div>
              <div className="section2b3">
                <p>selected items</p>
                <div className="selecteditem"><p>selected item 1</p></div>
                <div className="selecteditem"><p>selected item 2</p></div>
                <div className="selecteditem"><p>selected item 3</p></div>
                <div className="selecteditem"><p>selected item 4</p></div>
                <div className="selecteditem"><p>selected item 5</p></div>
                <div className="selecteditem"><p>selected item 6</p></div>
              </div>
            </div>
          </div>
          <div className="section3">
            <div className="abilities"><p>passive</p></div>
            <div className="abilities"><p>Q</p><div className="abilitylevel"><p>Level switch</p></div></div>
            <div className="abilities"><p>W</p><div className="abilitylevel"><p>Level switch</p></div></div>
            <div className="abilities"><p>E</p><div className="abilitylevel"><p>Level switch</p></div></div>
            <div className="abilities"><p>R</p><div className="abilitylevel"><p>Level switch</p></div></div>
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
