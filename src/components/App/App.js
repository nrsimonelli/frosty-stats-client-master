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
  
  render(){
    return (
      <div className="root">
        <p>hello</p>
      </div>
    

    ); // end return
  } // end render 
} // end class

export default connect()(App);
