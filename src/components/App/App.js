import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {

  state={
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
    p9: '',
    p10: '',
    t1score: '',
    t2score: '',
    tb: '',
  }

  componentDidMount() {
    this.getPlayers();
    console.log(this.props.player)
  }

  getPlayers = () => {
    this.props.dispatch({
      type: 'FETCH_PLAYERS'
    })
  }
  
  render(){
    return (
      <div className="root">
        <p>hello</p>
        <table>
          <thead>
          <tr>
            <td>Player id</td>
            <td>Player Name</td>
          </tr>
          </thead>
          <tbody>
          {this.props.player.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
    

    ); // end return
  } // end render 
} // end class

const mapStateToProps = (state) => ({
  player: state.player
})

export default connect(mapStateToProps)(App);
