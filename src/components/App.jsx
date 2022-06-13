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
                <div className="itemsfield">
                  <div className="searchsort">
                    <form className="searchform">
                      <input type="text" id="itemsearch" name="search" placeholder="Item Search" className="searchbar" />
                    </form>
                    <form>
                      <select name="sortbar" id="sortitems" className="sortbar">
                        <option value="volvo">Gold Up</option>
                        <option value="saab">Gold Down</option>
                        <option value="opel">Name Up</option>
                        <option value="audi">Name Down</option>
                      </select>
                    </form>
                  </div>
                  <div className="items">
                    <ItemsList items={this.state.items} />
                  </div>
                </div>
              </div>
              <div className="section2b">
                <div className="section2b1">
                  <div className="championportrait">
                    {/* <p>champion Portrait</p> */}
                    <img src={`../images/champions/Aatrox.png`} alt={"Aatrox"} className="championImage" />
                    <div className="championname">
                      {/* <p>champion name</p> */}
                      <p><strong>Aatrox</strong></p>
                    </div>
                  </div>

                  <div className="level">
                    <strong><p>Level: 1</p></strong>
                    <div className="levelswitch-button">
                      <FontAwesomeIcon icon={faBars} className="icons" />
                    </div>
                  </div>
                </div>
                <div className="section2b2">
                  <div className="statblock">
                    {/* <p>statblock</p> */}
                    <table className="stattable">
                      <tbody>

                        <tr className="tbheader">
                          <th>Health</th>
                          <th>Mana</th>
                          <th>Armor</th>
                        </tr>
                        <tr className="tbnums">
                          <td>750</td>
                          <td>350</td>
                          <td>50</td>
                        </tr>
                        <tr className="tbheader">
                          <th>Health Regen. &#40;per 5s&#41;</th>
                          <th>Mana Regen. &#40;per 5s&#41;</th>
                          <th>Magic Resist</th>
                        </tr>
                        <tr className="tbnums">
                          <td>8</td>
                          <td>4</td>
                          <td>35</td>
                        </tr>
                        <tr className="tbheader">
                          <th>Attack Damage</th>
                          <th>Ability Power</th>
                          <th>Attack Speed</th>
                        </tr>
                        <tr className="tbnums">
                          <td>100</td>
                          <td>75</td>
                          <td>0.619</td>
                        </tr>
                        <tr className="tbheader">
                          <th>Armor Pen.</th>
                          <th>Magic Pen.</th>
                          <th>Critical Strike</th>

                        </tr>
                        <tr className="tbnums">
                          <td>18</td>
                          <td>10</td>
                          <td>10%</td>
                        </tr>
                        <tr className="tbheader">
                          <th>Ability Haste</th>
                          <th>Life Steal</th>
                          <th>Omnivamp</th>
                        </tr>
                        <tr className="tbnums">
                          <td>10%</td>
                          <td>15%</td>
                          <td>10%</td>
                        </tr>
                        <tr className="tbheader">
                          <th>Movement Speed</th>
                          <th>Attack Range</th>
                          <th>Tenacity</th>
                        </tr>
                        <tr className="tbnums">
                          <td>375</td>
                          <td>175</td>
                          <td>30%</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <div className="stats">
                      <div className="uniqueblock"><p>Attack Damage</p><p>100</p></div>
                      <div className="uniqueblock"><p>Ability Power</p><p>0</p></div>
                      <div className="uniqueblock"><p>Armor</p><p>50</p></div>
                      <div className="uniqueblock"><p>Magic Resist</p><p>25</p></div>
                      <div className="uniqueblock"><p>Attack Speed</p><p>0.75</p></div>
                      <div className="uniqueblock"><p>Ability Haste</p><p>0</p></div>
                      <div className="uniqueblock"><p>Critical Strike</p><p>0</p></div>
                      <div className="uniqueblock"><p>Movement Speed</p><p>350</p></div>
                      <div className="uniqueblock"><p>Health</p><p>750</p></div>
                      <div className="uniqueblock"><p>Mana</p><p>300</p></div>
                      <div className="uniqueblock"><p>Health Regeneration</p><p>5</p></div>
                      <div className="uniqueblock"><p>Mana Regeneration</p><p>3</p></div>
                      <div className="uniqueblock"><p>Armor Penetration</p><p>5</p></div>
                      <div className="uniqueblock"><p>Magic Penetration</p><p>5</p></div>
                      <div className="uniqueblock"><p>Life Steal</p><p>10%</p></div>
                      <div className="uniqueblock"><p>Omnivamp</p><p>10%</p></div>
                      <div className="uniqueblock"><p>Attack Range</p><p>175</p></div>
                      <div className="uniqueblock"><p>Tenacity</p><p>10%</p></div>
                    </div> */}
                  </div>
                </div>
                <div className="section2b3">
                  <div className="selecteditem">
                    <p><strong>Selected Items</strong></p>
                  </div>
                  <table className="selecttable">
                    <tbody>
                      <tr>
                        <td><img src="../images/items/1001.png" alt="boots" /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <p>selected items</p>
                  <div className="selecteditem"><p>selected item 1</p></div>
                  <div className="selecteditem"><p>selected item 2</p></div>
                  <div className="selecteditem"><p>selected item 3</p></div>
                  <div className="selecteditem"><p>selected item 4</p></div>
                  <div className="selecteditem"><p>selected item 5</p></div>
                  <div className="selecteditem"><p>selected item 6</p></div> */}
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
