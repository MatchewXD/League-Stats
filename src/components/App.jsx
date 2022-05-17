import logo from '../logo.svg';
// import bgImage from '../lolBackground.jpg';
import '../App.css';
import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import ItemsList from './itemsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      champions: [],
      items: []
    }

    this.click = this.click.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // console.log("Component Did Mount");
    this.getData();
  }

  getData() {
    var champs = [];
    var cItems = [];
    axios.get('http://localhost:3001/champions')
      .then((res) => {
        champs = res.data;
        // console.log("We have the champions list!!", champs);
        console.log(champs[0]);
        axios.get('http://localhost:3001/items')
          .then((res) => {
            cItems = res.data;
            // console.log("We have the items list!", cItems);
            this.setState({ champions: champs, items: cItems });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  click() {
    console.log('Click!');
  }


  render() {
    return (
      <>
        {/* <img src={bgImage} className="background-image" alt="lolbackground" /> */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="App-body">
            <p>Body</p>

            <div className="section1">
              <div className="itemsetname">
                <div className="pencil-button">
                  <button onClick={this.click} className="btn-style"><FontAwesomeIcon icon={faPen} className="icons" /></button>
                </div>
                <strong><p>Unnamed Item Set</p></strong>
                <div className="itemsetswitch-button">
                  <FontAwesomeIcon icon={faBars} className="icons" />
                </div>
              </div>
              <div className="level">
                <strong><p>Level: 1</p></strong>
                <div className="levelswitch-button">
                  <FontAwesomeIcon icon={faBars} className="icons" />
                </div>
              </div>
              <div className="section1a">
                <div className="delete-button">
                  <button className="btn-style"><FontAwesomeIcon icon={faTrash} className="icons" /></button>

                </div>
                <div className="save-button">
                  <button className="btn-save"><b>Save</b></button>
                </div>
              </div>
            </div>
            <div className="section2">
              <div className="section2a">
                <div className="filteroptions">
                  <p className="btn-clear">X Clear</p>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Attack damage
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Critical Strike
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Attack Speed
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      On-Hit Effects
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Armor Penetration
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Ability Power
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Mana & Regeneration
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Armor
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Magic Resistance
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Ability Haste
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Movement
                    </label>
                  </div>
                  <div className="foption">
                    <label>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      Life Steal & Vamp
                    </label>
                  </div>
                </div>
                <div className="items">
                  <p>items</p>
                  <div className="itemsearch">
                    <p>item search</p>
                  </div>
                  <ItemsList items={this.state.items} />
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
                    <img src={`../images/champions/Aatrox.png`} alt={"Aatrox"} className="championImage" />
                  </div>
                  <div className="championname">
                    <p>champion name</p>
                    <p><strong>Aatrox</strong></p>
                  </div>
                </div>
                <div className="section2b2">
                  <div className="statblock">
                    <p>statblock</p>
                    <div className="stats">
                      <div><p>Attack Damage</p><p>100</p></div>
                      <div><p>Ability Power</p><p>0</p></div>
                      <div><p>Armor</p><p>50</p></div>
                      <div><p>Magic Resist</p><p>25</p></div>
                      <div><p>Attack Speed</p><p>0.75</p></div>
                      <div><p>Ability Haste</p><p>0</p></div>
                      <div><p>Critical Strike</p><p>0</p></div>
                      <div><p>Movement Speed</p><p>350</p></div>
                      <div><p>Health</p><p>750</p></div>
                      <div><p>Mana</p><p>300</p></div>
                      <div><p>Health Regeneration</p><p>5</p></div>
                      <div><p>Mana Regeneration</p><p>3</p></div>
                      <div><p>Armor Penetration</p><p>5</p></div>
                      <div><p>Magic Penetration</p><p>5</p></div>
                      <div><p>Life Steal</p><p>10%</p></div>
                      <div><p>Omnivamp</p><p>10%</p></div>
                      <div><p>Attack Range</p><p>175</p></div>
                      <div><p>Tenacity</p><p>10%</p></div>
                    </div>
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
        </div >
      </>
    );
  }
}

export default App;
