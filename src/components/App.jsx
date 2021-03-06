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
      items: [],
      setName: '',
      changeSetName: false
    }

    this.click = this.click.bind(this);
    this.getData = this.getData.bind(this);
    this.renderSetName = this.renderSetName.bind(this);
    this.openSetNameChange = this.openSetNameChange.bind(this);
    this.setNameOnChange = this.setNameOnChange.bind(this);
    this.setNameOnSubmit = this.setNameOnSubmit.bind(this);
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
        // console.log(champs[0]);
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

  setNameOnChange(input) {
    var inputValue = input.target.value;
    this.setState({ setName: inputValue });
  }

  setNameOnSubmit(event) {
    event.preventDefault();
    var isChangeSetName = this.state.changeSetName;
    isChangeSetName = false;
    this.setState({ changeSetName: isChangeSetName });
    // console.log("Submitted");
  }

  openSetNameChange() {
    console.log("Clicked");
    var isChangeSetName = this.state.changeSetName;
    if (isChangeSetName) {
      isChangeSetName = false;
      this.setState({ changeSetName: false });
    } else {
      isChangeSetName = true;
      this.setState({ changeSetName: true });
    }
  }

  renderSetName() {
    var thisSetName = this.state.setName;
    var isChangeSetName = this.state.changeSetName;
    if (isChangeSetName) {
      return <form className="searchform" onSubmit={this.setNameOnSubmit} >
        <input type="text" id="itemsearch" name="search" value={thisSetName} className="searchbar" onChange={this.setNameOnChange} onBlur={this.setNameOnSubmit} />
      </form>;
    } else {
      if (thisSetName === '') {
        return <strong><p>Unnamed Item Set</p></strong>;
      } else {
        return <strong><p>{thisSetName}</p></strong>
      }
    }
  }


  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="App-body">
            <div className="section1">
              <div className="itemsetname">
                <div className="pencil-button">
                  <button onClick={this.openSetNameChange} className="btn-style"><FontAwesomeIcon icon={faPen} className="icons" /></button>
                </div>
                {this.renderSetName()}
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
                          <th>Health Regen. <br />&#40;per 5s&#41;</th>
                          <th>Mana Regen. <br />&#40;per 5s&#41;</th>
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
                </div>
              </div>
            </div>
            <div className="section3">
              <div className="abilities">
                <strong className="abilitytitle"><p>Deathbringer Stance</p></strong>
                <p className="key">passive</p>
                <p className="abilitylevel"></p>
                <img src="../images/passive/Aatrox_Passive.png" alt="aatroxPassive" className="abilityimg" />
                <p className="abilitybody">Periodically, Aatrox's next basic attack deals <span>&#40;{45}&#41;</span> bonus physical damage and heals him, based on the target's max health.</p>
              </div>
              <div className="abilities">
                <strong className="abilitytitle"><p>The Darkin Blade</p></strong>
                <p className="key">Q</p>
                <p className="abilitylevel">Level switch</p>
                <img src="../images/spell/AatroxQ.png" alt="aatroxPassive" className="abilityimg" />
                <p className="abilitybody">Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.</p>
              </div>
              <div className="abilities">
                <strong className="abilitytitle"><p>Infernal Chains</p></strong>
                <p className="key">W</p>
                <p className="abilitylevel">Level switch</p>
                <img src="../images/spell/AatroxW.png" alt="aatroxPassive" className="abilityimg" />
                <p className="abilitybody">Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.</p>
              </div>
              <div className="abilities">
                <strong className="abilitytitle"><p>Umbral Dash</p></strong>
                <p className="key">E</p>
                <p className="abilitylevel">Level switch</p>
                <img src="../images/spell/AatroxE.png" alt="aatroxPassive" className="abilityimg" />
                <p className="abilitybody">Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.</p>
              </div>
              <div className="abilities">
                <strong className="abilitytitle"><p>World Ender</p></strong>
                <p className="key">R</p>
                <p className="abilitylevel">Level switch</p>
                <img src="../images/spell/AatroxR.png" alt="aatroxPassive" className="abilityimg" />
                <p className="abilitybody">Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.</p>
              </div>
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
