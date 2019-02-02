import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

 


  render() {
    return (
      <>
        <div className='holder'>
          <div classNmae='calculator'>
            <div className='row'>
              <div className='col-12 inputview'>0</div>
              <button className='button col-3'>AC</button>

            
            </div>

          </div>
        
        
        
        </div>
      </>
  

    );
  }
}

export default App;
